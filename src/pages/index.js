import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          className={styles.heroLogo}
          src="/img/mw_logo.png"
          alt="MARS/WARS Logo"
        />
        <Heading as="h1" className="hero__title">
          MARS/WARS Robotics Program
        </Heading>
        <p className="hero__subtitle">
          Documentation Hub for Software, Design, and Business Services
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://marswars.org">
            Visit Our Public Website 🌐
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, description, link, icon}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className={clsx("button button--primary", styles.redButton)} to={link}>
          Learn More
        </Link>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <FeatureCard
            title="Software Development"
            description="Learn programming concepts, robot control systems, and development workflows for FRC robotics."
            link="/docs/software/overview"
            icon="💻"
          />
          <FeatureCard
            title="Design & CAD"
            description="Explore mechanical design principles, CAD modeling, and machining processes."
            link="/docs/design/overview"
            icon="🔧"
          />
          <FeatureCard
            title="Business Services"
            description="Discover team management, outreach programs, and business operations."
            link="/docs/business_services/overview"
            icon="💼"
          />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h2">About MARS/WARS</Heading>
            <p>
              MARS/WARS is a dedicated robotics team committed to excellence in STEM education and competitive robotics. 
              Our organization focuses on developing technical skills, fostering innovation, and building strong community partnerships.
              The organization runs two FRC teams: MARS/WARS (<Link href="https://www.thebluealliance.com/team/4143">Team 4143</Link>) and MARS' Minions (<Link href="https://www.thebluealliance.com/team/4423">Team 4423</Link>).
            </p>
            <p>
              This documentation site serves as our knowledge base, containing guides, tutorials, and resources for all aspects 
              of our robotics program - from software development and mechanical design to business operations and team management.
            </p>
          </div>
          <div className="col col--6">
            <Heading as="h2">What You'll Find Here</Heading>
            <ul>
              <li><strong>Software Documentation:</strong> Programming tutorials, code standards, and development workflows</li>
              <li><strong>Design Resources:</strong> CAD guides, mechanical principles, and engineering best practices</li>
              <li><strong>Business Operations:</strong> Team management, outreach strategies, and organizational resources</li>
              <li><strong>Training Materials:</strong> Step-by-step learning paths for new team members</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="FRC Team 4143 MARS/WARS Documentation Hub - Resources for Software, Design, and Business Services">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AboutSection />
      </main>
    </Layout>
  );
}
