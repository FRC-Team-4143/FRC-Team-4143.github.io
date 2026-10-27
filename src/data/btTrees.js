// Trees and animations for <ArboristTree> on the Behavior Trees and Autonomous pages. Trees are BehaviorTree.CPP v4
// XML, as Arbor saves them. Animation steps key nodes by name="" (or by type when it's the only one); see
// src/components/ArboristTree.js.

const file = (id, body) => `<?xml version="1.0" encoding="UTF-8"?>
<root BTCPP_format="4" main_tree_to_execute="${id}">
  <BehaviorTree ID="${id}">
${body}
  </BehaviorTree>
</root>`;

const RESET = {label: 'Next run', caption: 'Everything is reset for the next run.', reset: true};

// ------------------------------------------------------------------------------------------- Behavior Trees page

export const STEPS_TREE = file(
  'PickupAndScore',
  `    <Sequence>
      <FollowTrajectory name="Drive to the pickup" trajectory="ToPickup"/>
      <Fallback>
        <Timeout msec="3000">
          <Aim/>
        </Timeout>
        <FollowTrajectory name="Drive to the backup spot" trajectory="ToBackup"/>
      </Fallback>
      <SetWantedState state="SHOOT"/>
    </Sequence>`,
);

const SEQUENCE = file(
  'DriveAimShoot',
  `    <Sequence>
      <DrivePath name="Drive path"/>
      <Aim/>
      <Shoot/>
    </Sequence>`,
);

export const SEQUENCE_SUCCESS = {
  xml: SEQUENCE,
  steps: [
    {label: 'Tick 1', caption: 'The Sequence ticks its first child. Driving takes time, so Drive path answers RUNNING, and so does the Sequence.', set: {Sequence: 'RUNNING', 'Drive path': 'RUNNING'}},
    {label: 'Tick 2', caption: 'Next tick the Sequence resumes at the child that was RUNNING. Still driving, so still RUNNING.'},
    {label: 'Tick 3', caption: 'Drive path finishes: SUCCESS. The Sequence moves on to the next child in the same tick. Aim starts and is RUNNING.', set: {'Drive path': 'SUCCESS', Aim: 'RUNNING'}},
    {label: 'Tick 4', caption: 'Aim reports SUCCESS, so Shoot is ticked right away. Shoot is RUNNING.', set: {Aim: 'SUCCESS', Shoot: 'RUNNING'}},
    {label: 'Tick 5', caption: 'Every child succeeded, so the Sequence reports SUCCESS to its parent.', set: {Shoot: 'SUCCESS', Sequence: 'SUCCESS'}},
    {label: 'Next run', caption: 'Its parent can now run the Sequence again from the start.', reset: true},
  ],
};

export const SEQUENCE_FAILURE = {
  xml: SEQUENCE,
  steps: [
    {label: 'Tick 1', caption: 'Drive path is RUNNING, so the Sequence is RUNNING.', set: {Sequence: 'RUNNING', 'Drive path': 'RUNNING'}},
    {label: 'Tick 2', caption: 'Drive path succeeds, but Aim answers FAILURE (no target in view). The Sequence stops here and reports FAILURE.', set: {'Drive path': 'SUCCESS', Aim: 'FAILURE', Sequence: 'FAILURE'}},
    {label: 'Tick 2', caption: 'Shoot was never ticked. A Sequence gives up at the first failure, so Shoot can rely on Aim having worked.'},
    {label: 'Next run', caption: 'After a FAILURE every child is reset: the next run starts again at Drive path.', reset: true},
  ],
};

export const FALLBACK = {
  xml: file(
    'AimSomehow',
    `    <Fallback>
      <AimWithVision name="Aim: vision"/>
      <AimManually name="Aim: manual"/>
      <SkipTheShot name="Skip the shot"/>
    </Fallback>`,
  ),
  steps: [
    {label: 'Tick 1', caption: 'A Fallback tries its children in order. Aim: vision is RUNNING, so the Fallback waits.', set: {Fallback: 'RUNNING', 'Aim: vision': 'RUNNING'}},
    {label: 'Tick 2', caption: 'Aim: vision FAILS, so the Fallback tries its next child: Aim: manual.', set: {'Aim: vision': 'FAILURE', 'Aim: manual': 'RUNNING'}},
    {label: 'Tick 3', caption: 'Aim: manual SUCCEEDS. The Fallback stops and reports SUCCESS; Skip the shot is never tried.', set: {'Aim: manual': 'SUCCESS', Fallback: 'SUCCESS'}},
    {label: 'Run again', caption: 'Now suppose nothing works...', reset: true},
    {label: 'Tick 1', caption: 'Again the Fallback starts with Aim: vision. It is RUNNING, so the Fallback waits.', set: {Fallback: 'RUNNING', 'Aim: vision': 'RUNNING'}},
    {label: 'Tick 2', caption: 'Aim: vision FAILS, so the Fallback tries Aim: manual. It is RUNNING.', set: {'Aim: vision': 'FAILURE', 'Aim: manual': 'RUNNING'}},
    {label: 'Tick 3', caption: 'Aim: manual FAILS too, so the Fallback tries its last child: Skip the shot is RUNNING.', set: {'Aim: manual': 'FAILURE', 'Skip the shot': 'RUNNING'}},
    {label: 'Tick 4', caption: 'Skip the shot FAILS. Every child has failed, so the Fallback reports FAILURE. Only now does its parent hear bad news.', set: {'Skip the shot': 'FAILURE', Fallback: 'FAILURE'}},
    RESET,
  ],
};

export const REACTIVE_SEQUENCE = {
  xml: file(
    'DriveWhileHolding',
    `    <ReactiveSequence>
      <HasGamePiece name="Has game piece?"/>
      <DrivePath name="Drive path"/>
    </ReactiveSequence>`,
  ),
  steps: [
    {label: 'Tick 1', caption: 'A ReactiveSequence re-checks its earlier children on every tick. The condition passes and Drive path starts.', set: {ReactiveSequence: 'RUNNING', 'Has game piece?': 'SUCCESS', 'Drive path': 'RUNNING'}},
    {label: 'Tick 2', caption: 'The condition is asked again even though Drive path is RUNNING. (A plain Sequence would resume at Drive path.)', set: {'Has game piece?': 'SUCCESS'}},
    {label: 'Tick 3', caption: 'The game piece is gone. The condition FAILS, Drive path is halted (back to idle), and the ReactiveSequence reports FAILURE.', set: {'Has game piece?': 'FAILURE', 'Drive path': 'IDLE', ReactiveSequence: 'FAILURE'}},
    RESET,
  ],
};

export const PARALLEL_DEADLINE = {
  xml: file(
    'PathWithIntake',
    `    <ParallelDeadline>
      <FollowTrajectory name="Follow path" trajectory="ToPickup"/>
      <IntakeOnEvent name="Intake on event"/>
    </ParallelDeadline>`,
  ),
  steps: [
    {label: 'Tick 1', caption: 'A ParallelDeadline ticks all of its children together every tick. The first child, Follow path, is the deadline.', set: {ParallelDeadline: 'RUNNING', 'Follow path': 'RUNNING', 'Intake on event': 'RUNNING'}},
    {label: 'Tick 2', caption: 'Both are RUNNING, so the ParallelDeadline is RUNNING.'},
    {label: 'Tick 3', caption: 'The deadline child finishes: SUCCESS. The others are halted, even though Intake on event never completed.', set: {'Follow path': 'SUCCESS', 'Intake on event': 'IDLE', ParallelDeadline: 'SUCCESS'}},
    RESET,
  ],
};

export const TIMEOUT = {
  xml: file(
    'AimOrBackup',
    `    <Fallback>
      <Timeout msec="3000">
        <Aim/>
      </Timeout>
      <FollowTrajectory name="Backup path" trajectory="ToBackup"/>
    </Fallback>`,
  ),
  steps: [
    {label: '0.0 s', caption: 'The Timeout ticks Aim and starts a 3 second clock.', set: {Fallback: 'RUNNING', Timeout: 'RUNNING', Aim: 'RUNNING'}},
    {label: '1.5 s', caption: 'Aim is still RUNNING, so the Timeout is RUNNING.'},
    {label: '3.0 s', caption: 'Time is up. The Timeout halts Aim (back to idle) and answers FAILURE.', set: {Aim: 'IDLE', Timeout: 'FAILURE'}},
    {label: '3.0 s', caption: 'The Fallback moves on to plan B: Backup path is RUNNING.', set: {'Backup path': 'RUNNING'}},
    {label: '5.0 s', caption: 'Backup path succeeds, so the Fallback reports SUCCESS. A step that hangs can no longer stall the whole auto.', set: {'Backup path': 'SUCCESS', Fallback: 'SUCCESS'}},
    RESET,
  ],
};

export const TALK_TO_ROBOT = file(
  'AimAndWait',
  `    <Sequence>
      <SetWantedState state="AIM"/>
      <Timeout msec="3000">
        <RetryUntilSuccessful num_attempts="-1">
          <IsSystemState state="AIM"/>
        </RetryUntilSuccessful>
      </Timeout>
    </Sequence>`,
);

// The real-style auto from "Reading a Real Auto", with a run where aiming times out.
export const PICKUP_AND_SCORE = {
  xml: file(
    'PickupAndScore',
    `    <Sequence>
      <FollowTrajectory name="To pickup" trajectory="ToPickup"/>
      <SetWantedState name="Ask for AIM" state="AIM"/>
      <Fallback>
        <Timeout msec="3000">
          <RetryUntilSuccessful num_attempts="-1">
            <IsSystemState name="Aimed?" state="AIM"/>
          </RetryUntilSuccessful>
        </Timeout>
        <FollowTrajectory name="To backup" trajectory="ToBackup"/>
      </Fallback>
      <SetWantedState name="Shoot" state="SHOOT"/>
    </Sequence>`,
  ),
  steps: [
    {label: '0.0 s', caption: 'The Sequence starts the first path. The robot drives to the pickup.', set: {Sequence: 'RUNNING', 'To pickup': 'RUNNING'}},
    {label: '2.4 s', caption: 'The path is done. Asking for AIM is instant, so the Sequence reaches the Fallback in the same tick.', set: {'To pickup': 'SUCCESS', 'Ask for AIM': 'SUCCESS', Fallback: 'RUNNING', Timeout: 'RUNNING', RetryUntilSuccessful: 'RUNNING', 'Aimed?': 'FAILURE'}},
    {label: '2.4 to 5.4 s', caption: 'Aimed? keeps answering FAILURE (no target in view), and RetryUntilSuccessful keeps asking again.'},
    {label: '5.4 s', caption: 'Three seconds are up. The Timeout halts the retry and fails, so the Fallback tries plan B: drive to the backup spot.', set: {RetryUntilSuccessful: 'IDLE', 'Aimed?': 'IDLE', Timeout: 'FAILURE', 'To backup': 'RUNNING'}},
    {label: '7.0 s', caption: 'The backup path succeeds, so the Fallback succeeds and the Sequence moves on: Shoot.', set: {'To backup': 'SUCCESS', Fallback: 'SUCCESS', Shoot: 'SUCCESS', Sequence: 'SUCCESS'}},
    RESET,
  ],
};

// ------------------------------------------------------------------------------------------- Autonomous page

// common.xml: the shared blocks the 2026 autos use as SubTrees.
export const COMMON_XML = `<?xml version="1.0" encoding="UTF-8"?>
<root BTCPP_format="4">
  <BehaviorTree ID="IntakeOnEvent">
    <Sequence>
      <WaitForChoreoEvent event="{event}"/>
      <SetIntakeState state="{state}"/>
    </Sequence>
  </BehaviorTree>
  <BehaviorTree ID="ShootFor">
    <Sequence>
      <ParallelDeadline>
        <Sleep msec="{duration_msec}"/>
        <SetWantedState state="SHOOT"/>
      </ParallelDeadline>
      <SetWantedState state="AUTO"/>
    </Sequence>
  </BehaviorTree>
  <TreeNodesModel>
    <SubTree ID="IntakeOnEvent">
      <input_port name="event" type="std::string">Choreo event marker to wait for</input_port>
      <input_port name="state" type="IntakeStates">Intake state to request then</input_port>
    </SubTree>
    <SubTree ID="ShootFor">
      <input_port name="duration_msec" type="int" default="2000">How long to shoot</input_port>
    </SubTree>
  </TreeNodesModel>
</root>`;

export const CITRUS_SYNERGY = [
  {
    path: 'trees/CitrusSynergy.xml',
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<root BTCPP_format="4" main_tree_to_execute="CitrusSynergy">
  <BehaviorTree ID="CitrusSynergy">
    <Sequence>
      <SetShooterTarget target="HUB"/>
      <SetIntakeState state="STORE"/>
      <Sleep msec="1000"/>
      <ParallelDeadline>
        <FollowTrajectory trajectory="SynergyP1" end_state="IDLE"/>
        <SubTree ID="IntakeOnEvent" event="Intake Out" state="INTAKE"/>
      </ParallelDeadline>
      <Delay delay_msec="{middle_wait_msec}">
        <FollowTrajectory trajectory="SynergyP2" end_state="IDLE"/>
      </Delay>
      <SubTree ID="ShootFor" duration_msec="2000"/>
    </Sequence>
  </BehaviorTree>
  <TreeNodesModel>
    <SubTree ID="CitrusSynergy">
      <input_port name="middle_wait_msec" type="int" default="3000">Wait before the second path</input_port>
    </SubTree>
  </TreeNodesModel>
</root>`,
  },
  {path: 'trees/common.xml', xml: COMMON_XML},
];

export const SHOOT_FOR = [{path: 'trees/common.xml', xml: COMMON_XML}];

export const AIM_WITH_FALLBACK = file(
  'AimOrBackup',
  `    <Sequence>
      <SetWantedState state="AIM"/>
      <Fallback>
        <Timeout msec="3000">
          <RetryUntilSuccessful num_attempts="-1">
            <IsSystemState state="AIM"/>
          </RetryUntilSuccessful>
        </Timeout>
        <FollowTrajectory trajectory="ToBackupSpot"/>
      </Fallback>
    </Sequence>`,
);

export const CHOREO_EVENTS = [
  {
    path: 'trees/SlopAuto.xml',
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<root BTCPP_format="4" main_tree_to_execute="SlopAuto">
  <BehaviorTree ID="SlopAuto">
    <ParallelDeadline>
      <FollowTrajectory trajectory="SlopAutoStart" end_state="FIELD_CENTRIC_ROTATION_LOCK"/>
      <SubTree ID="IntakeOnEvent" event="Intake Out" state="INTAKE"/>
      <SubTree ID="IntakeOnEvent" event="Intake In" state="STORE"/>
    </ParallelDeadline>
  </BehaviorTree>
</root>`,
  },
  {path: 'trees/common.xml', xml: COMMON_XML},
];
