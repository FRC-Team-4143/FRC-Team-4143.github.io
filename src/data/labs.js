// Every lab, in the order the Labs hub lists them. Each one is static/lab-tools/<slug>.html, shown at
// /labs/<slug> by a page in src/pages/labs/. `docs` are the pages the lab goes with.
const labs = [
  {
    slug: 'pid-tuning-lab',
    title: 'PID Tuning Lab',
    area: 'Controls',
    icon: '🎛️',
    blurb: 'Tune PID and feedforward on a simulated arm, elevator and flywheel, and watch every gain change the response.',
    docs: [
      {label: 'PID', to: '/docs/software/controls/system-control/pid'},
      {label: 'Feedforward', to: '/docs/software/controls/system-control/feed-fwd'},
    ],
  },
  {
    slug: 'state-machine-lab',
    title: 'State Machine Lab',
    area: 'Controls',
    icon: '🔀',
    blurb: 'Click through states and transitions on a live diagram, step the loop, and build a transition table yourself.',
    docs: [{label: 'State Machines', to: '/docs/software/controls/state-machines'}],
  },
  {
    slug: 'behavior-tree-lab',
    title: 'Behavior Tree Lab',
    area: 'Autonomous',
    icon: '🌳',
    blurb: 'Run an autonomous behavior tree tick by tick in the Arbor viewer, break things on purpose, and edit the XML.',
    docs: [
      {label: 'Behavior Trees', to: '/docs/software/controls/behavior-trees'},
      {label: 'Arbor', to: '/docs/software/tools/arbor'},
    ],
  },
  {
    slug: 'pose-estimator-lab',
    title: 'Pose Estimator Lab',
    area: 'Localization',
    icon: '📍',
    blurb: 'Drive a swerve robot around the field and watch odometry drift while AprilTag vision pulls the estimate back.',
    docs: [
      {label: 'AprilTags', to: '/docs/software/vision/april_tags'},
      {label: 'Objects & Odometry', to: '/docs/software/training/objects-odometry'},
    ],
  },
  {
    slug: 'swerve-lab',
    title: 'Swerve Kinematics Lab',
    area: 'Drivetrain',
    icon: '🛞',
    blurb: 'Drive with two joysticks and see how chassis speeds become four module angles and speeds.',
    docs: [{label: 'Swerve', to: '/docs/software/robot_dev/swerve'}],
  },
  {
    slug: 'filter-lab',
    title: 'Signal Filter Lab',
    area: 'Sensors',
    icon: '〰️',
    blurb: 'Clean up noisy sensors with debouncers, moving averages and slew rate limiters, and measure the lag each one costs.',
    docs: [{label: 'Signal Filtering', to: '/docs/software/controls/filters'}],
  },
];

export default labs;
