

import React, { useState } from 'react';

const systems = [
  {
    name: 'Elevator',
    correct: 'closed',
    reason:
      'We need precise control over the elevator position to ensure we are always at the same height. This requires continuous feedback and adjustment.',
  },
  {
    name: 'Intake',
    correct: 'open',
    reason:
      'Typically when intaking we just need to spin the wheels enough to move the game piece. This does not require any feedback.',
  },
  {
    name: 'Arm',
    correct: 'closed',
    reason:
      'We need precise control over the arm rotation to ensure we are always at the same angle. This requires continuous feedback and adjustment.',
  },
  {
    name: 'Shooter Angle',
    correct: 'closed',
    reason:
      'We need precise control over the shooter angle to ensure we are always at the same angle. This requires continuous feedback and adjustment.',
  },
  {
    name: 'Outtake',
    correct: 'open',
    reason:
      'Typically when outtaking we just need to spin the wheels enough to move the game piece. This does not require any feedback.',
  },
  {
    name: 'Shooter Wheels',
    correct: 'closed',
    reason:
      'We need precise control over the shooter wheels to ensure we are always at the same speed. This requires continuous feedback and adjustment.',
  },
  {
    name: 'Swerve',
    correct: ['open', 'closed'],
    reason:
      'THIS ONE IS TRICKY! In Tele-op when a human is driving we just let the robot uses its best guess at to reach a speed, but when using automated functions the robot needs to know its exact speed and speed up / slow down to reach its desired velocity.',
  },
];

export default function SystemControlQuiz() {
  const [systemIdx, setSystemIdx] = useState(0);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handlePick = (picked) => {
    const system = systems[systemIdx];
    let isCorrect;
    if (Array.isArray(system.correct)) {
      isCorrect = system.correct.includes(picked);
    } else {
      isCorrect = system.correct === picked;
    }
    setResult({
      correct: isCorrect,
      reason: system.reason,
      picked,
    });
    if (isCorrect) setScore((s) => s + 1);
    if (systemIdx === systems.length - 1) {
      setTimeout(() => {
        setFinished(true);
      }, 5000);
    } else {
      setTimeout(() => {
        setResult(null);
        setSystemIdx((i) => i + 1);
      }, 5000);
    }
  };

  const handleRestart = () => {
    setSystemIdx(0);
    setResult(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const total = systems.length;
    return (
      <div style={{ maxWidth: 400, margin: '2em auto', padding: '1em', border: '1px solid #ccc', borderRadius: 8, textAlign: 'center' }}>
        <h3>Quiz Complete!</h3>
        <div style={{ fontSize: 22, fontWeight: 600, margin: '1em 0' }}>Score: {score} / {total}</div>
        <div style={{ fontSize: 18, marginBottom: '1em' }}>
          Make sure you understand the differences between closed loop and open loop. As you can see we use both types on the robot so understanding them is important!
        </div>
        <button
          style={{
            padding: '0.75em 2em',
            fontSize: 18,
            background: 'var(--ifm-button-background, #1976d2)',
            color: 'var(--ifm-button-color, #fff)',
            border: '2px solid #888',
            borderRadius: 8,
            cursor: 'pointer',
            fontWeight: 600,
            boxShadow: '0 2px 8px #2222',
          }}
          onClick={handleRestart}
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  const system = systems[systemIdx];

  return (
    <div style={{ maxWidth: 400, margin: '2em auto', padding: '1em', border: '1px solid #ccc', borderRadius: 8 }}>
      <h3>Identifying Control System Types</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <button
          style={{
            flex: 1,
            marginRight: 8,
            padding: '1em',
            fontSize: 18,
            background: 'var(--ifm-button-background, #1976d2)',
            color: 'var(--ifm-button-color, #fff)',
            border: '2px solid #888',
            borderRadius: 8,
            cursor: 'pointer',
            fontWeight: 600,
            boxShadow: '0 2px 8px #2222',
          }}
          onClick={() => handlePick('open')}
          disabled={!!result}
        >
          Open
        </button>
        <div style={{ flex: 2, textAlign: 'center', fontSize: 22, fontWeight: 600 }}>
          {system.name}
        </div>
        <button
          style={{
            flex: 1,
            marginLeft: 8,
            padding: '1em',
            fontSize: 18,
            background: 'var(--ifm-button-background, #388e3c)',
            color: 'var(--ifm-button-color, #fff)',
            border: '2px solid #888',
            borderRadius: 8,
            cursor: 'pointer',
            fontWeight: 600,
            boxShadow: '0 2px 8px #2222',
          }}
          onClick={() => handlePick('closed')}
          disabled={!!result}
        >
          Closed
        </button>
      </div>
      <div style={{ marginTop: 24, minHeight: 48 }}>
        {result && (
          <div style={{ color: result.correct ? 'green' : 'red', fontWeight: 500 }}>
            <strong>{result.correct ? 'Correct!' : 'Incorrect.'}</strong>
            <div style={{ marginTop: 4 }}>{result.reason}</div>
            <div style={{ marginTop: 4, fontSize: 14, color: '#555' }}>
              You picked: <b>{result.picked === 'open' ? 'Open Loop' : 'Closed Loop'}</b>
            </div>
            <div style={{ marginTop: 4, fontSize: 13, color: '#888' }}>
              {systemIdx === systems.length - 1 ? 'Quiz ending in 5s...' : 'Next system in 5s...'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
