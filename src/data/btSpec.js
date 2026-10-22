// The node spec (Arbor's nodes.xml) the docs' tree diagrams load, so Arborist knows every node's kind,
// ports and enum values: MW-Lib's shared nodes and the 2026 robot's, as in the Behavior Tree Lab, plus a few
// teaching-only nodes used by the animations on the Behavior Trees page.
export const BT_SPEC_XML = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Every node an auto can use, for Arbor and Groot2: MW-Lib's shared nodes, then the 2026 robot's nodes.
     Copied from the Behavior Tree Lab (static/lab-tools/behavior-tree-lab.html); keep the two in step. -->
<root BTCPP_format="4">
  <TreeNodesModel>
    <!-- MW-Lib shared nodes (com.marswars.bt) -->
    <Control ID="ParallelDeadline">
      <description>Run all children until the first one finishes, then halt the rest and return its result</description>
    </Control>
    <Action ID="FollowTrajectory">
      <input_port name="trajectory" type="trajectory">Choreo trajectory name (deploy/choreo/&lt;name&gt;.traj)</input_port>
      <input_port name="path_state" type="SwerveStates" default="CHOREO_PATH">Swerve state used while following (CHOREO_PATH or CHOREO_PATH_ROTATION_LOCK)</input_port>
      <input_port name="end_state" type="SwerveStates" default="IDLE">Swerve state requested when the path finishes, gives up or is halted</input_port>
      <input_port name="min_time" type="double" default="0">Minimum seconds on the path before it may succeed</input_port>
      <input_port name="max_paused_sec" type="double" default="3">Fail once the path timer has been paused this long (the robot is stuck behind the path); 0 never gives up</input_port>
      <description>Follow a Choreo trajectory until its end setpoint is reached</description>
    </Action>
    <Action ID="WaitForChoreoEvent">
      <input_port name="event" type="std::string">Choreo event marker name</input_port>
      <description>Wait until the running trajectory passes a Choreo event marker (use next to a FollowTrajectory in a ParallelDeadline)</description>
    </Action>
    <Action ID="SetSwerveState">
      <input_port name="state" type="SwerveStates">State to request</input_port>
      <description>Request a swerve state</description>
    </Action>
    <Condition ID="IsAtChoreoSetpoint">
      <description>The swerve reached the end of its Choreo trajectory</description>
    </Condition>
    <Condition ID="HasChoreoTimeElapsed">
      <input_port name="seconds" type="double">Seconds on the path</input_port>
      <description>At least \`seconds\` of the current Choreo trajectory have run</description>
    </Condition>
    <Condition ID="HasChoreoEventPassed">
      <input_port name="event" type="std::string">Choreo event marker name</input_port>
      <description>The running trajectory passed a Choreo event marker</description>
    </Condition>
    <Condition ID="IsChassisStationary">
      <description>The chassis is not moving</description>
    </Condition>

    <!-- Robot nodes (frc.robot.autos.bt.AutoNodes) -->
    <Action ID="SetWantedState">
      <input_port name="state" type="RobotStates">Robot state to request</input_port>
      <description>Request a robot state (instant: succeeds at once)</description>
    </Action>
    <Condition ID="IsSystemState">
      <input_port name="state" type="RobotStates">Robot state to check</input_port>
      <description>The robot is in the given state</description>
    </Condition>
    <Action ID="SetIntakeState">
      <input_port name="state" type="IntakeStates">State to request</input_port>
      <description>Request an intake state</description>
    </Action>
    <Action ID="SetShooterState">
      <input_port name="state" type="ShooterStates">State to request</input_port>
      <description>Request a shooter state</description>
    </Action>
    <Action ID="SetShooterTarget">
      <input_port name="target" type="std::string" default="HUB">Field target to aim at (HUB, LEFT_PASS, RIGHT_PASS)</input_port>
      <description>Point the shooter at a named field target</description>
    </Action>
    <Condition ID="IsShooterReady">
      <description>Flywheel, hood and aim are within tolerance</description>
    </Condition>
    <!-- Teaching-only nodes for the Behavior Trees page's animations: steps that take several ticks,
         so a RUNNING step reads as one box. Real autos use SetWantedState + IsSystemState instead. -->
    <Action ID="DrivePath"><description>Drive a path (takes several ticks)</description></Action>
    <Action ID="Aim"><description>Aim at the target (takes several ticks)</description></Action>
    <Action ID="AimWithVision"><description>Aim using the camera</description></Action>
    <Action ID="AimManually"><description>Aim at a fixed angle</description></Action>
    <Action ID="SkipTheShot"><description>Give up on this shot</description></Action>
    <Action ID="Shoot"><description>Shoot the game piece</description></Action>
    <Action ID="IntakeOnEvent"><description>Run the intake when the path passes its event marker</description></Action>
    <Condition ID="HasGamePiece"><description>A game piece is in the robot</description></Condition>
  </TreeNodesModel>

  <Enums>
    <Enum type="RobotStates">
      <Value name="IDLE"/>
      <Value name="DRIVE"/>
      <Value name="TRACK"/>
      <Value name="AUTO"/>
      <Value name="AIM"/>
      <Value name="SHOOT"/>
      <Value name="SHOOT_WAIT"/>
      <Value name="SHOOT_FEED"/>
      <Value name="SHOOT_FEED_BRAKED"/>
      <Value name="SHOOT_PASS_INTAKE"/>
      <Value name="MANUAL_HUB"/>
      <Value name="MANUAL_PASS"/>
      <Value name="INTAKE"/>
      <Value name="OUTTAKE"/>
      <Value name="BRAKE"/>
      <Value name="MAINTENANCE"/>
    </Enum>
    <Enum type="IntakeStates">
      <Value name="STORE"/>
      <Value name="DEPLOYED"/>
      <Value name="PIVOT_HOMING"/>
      <Value name="INTAKE"/>
      <Value name="OUTTAKE"/>
      <Value name="IDLE"/>
      <Value name="SQUEEZE"/>
      <Value name="SQUEEZE_WAIT"/>
      <Value name="SQUEEZE_HOLD"/>
      <Value name="TUNING"/>
    </Enum>
    <Enum type="ShooterStates">
      <Value name="SHOOT_WAIT"/>
      <Value name="DUMP"/>
      <Value name="SHOOT"/>
      <Value name="IDLE"/>
      <Value name="TRACKING"/>
      <Value name="TUNING"/>
      <Value name="MANUAL_HUB"/>
      <Value name="MANUAL_PASS"/>
      <Value name="SPIN_DOWN"/>
      <Value name="AIMING"/>
      <Value name="HOOD_HOMING"/>
    </Enum>
    <Enum type="SwerveStates">
      <Value name="ROBOT_CENTRIC"/>
      <Value name="FIELD_CENTRIC"/>
      <Value name="CHOREO_PATH"/>
      <Value name="TRACTOR_BEAM"/>
      <Value name="CHASSIS_SPEEDS"/>
      <Value name="CRAWL_ROBOT_CENTRIC"/>
      <Value name="CRAWL_FIELD_CENTRIC"/>
      <Value name="ROBOT_CENTRIC_ROTATION_LOCK"/>
      <Value name="FIELD_CENTRIC_ROTATION_LOCK"/>
      <Value name="CHOREO_PATH_ROTATION_LOCK"/>
      <Value name="CHASSIS_SPEEDS_ROTATION_LOCK"/>
      <Value name="CRAWL_ROBOT_CENTRIC_ROTATION_LOCK"/>
      <Value name="CRAWL_FIELD_CENTRIC_ROTATION_LOCK"/>
      <Value name="BRAKE"/>
      <Value name="TUNING"/>
      <Value name="IDLE"/>
    </Enum>
  </Enums>
</root>
`;
