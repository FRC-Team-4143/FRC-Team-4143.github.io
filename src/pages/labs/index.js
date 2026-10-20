import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import labs from '@site/src/data/labs';
import styles from './labs.module.css';

function LabCard({lab}) {
  return (
    <article className={styles.card}>
      <Link to={`/labs/${lab.slug}`} className={styles.cardLink}>
        <span className={styles.icon} aria-hidden="true">{lab.icon}</span>
        <span className={styles.area}>{lab.area}</span>
        <Heading as="h2" className={styles.title}>{lab.title}</Heading>
        <p className={styles.blurb}>{lab.blurb}</p>
      </Link>
      <p className={styles.docs}>
        Goes with{' '}
        {lab.docs.map((d, i) => (
          <React.Fragment key={d.to}>
            {i > 0 && ', '}
            <Link to={d.to}>{d.label}</Link>
          </React.Fragment>
        ))}
      </p>
    </article>
  );
}

export default function Labs() {
  return (
    <Layout title="Labs" description="Interactive labs: tune controllers, step through state machines and behavior trees, and drive simulated robots in your browser.">
      <main className="container margin-vert--lg">
        <header className={styles.header}>
          <Heading as="h1">Labs</Heading>
          <p className={styles.lede}>
            Try the ideas from the docs on a simulated robot, right in your browser. Nothing to install, nothing to break.
            Each lab has a guided <b>walkthrough</b> if you are new to the topic.
          </p>
        </header>
        <div className={styles.grid}>
          {labs.map((lab) => (
            <LabCard key={lab.slug} lab={lab} />
          ))}
        </div>
        <p className={styles.credit}>
          The PID Tuning and Pose Estimator labs are adapted, with thanks, from the labs by{' '}
          <Link href="https://github.com/FRC1756-Argos/teamargos.org">FRC Team 1756 Argos</Link>. The Behavior Tree Lab
          draws trees with Arborist, the viewer from <Link href="https://github.com/coalman321/Arbor">Arbor</Link>.
        </p>
      </main>
    </Layout>
  );
}
