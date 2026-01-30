export const roboticsComponents = [
  {
    id: "mcu",
    title: "Microcontroller Unit",
    category: "Brain",
    theory:
      "A microcontroller unit (MCU) acts as the brain of the robot. It receives input signals from sensors, processes them using programmed logic, and generates output signals to control actuators and other peripherals.",
    working: [
      "Sensors send analog or digital signals to MCU input pins",
      "MCU processes data using its internal CPU",
      "Program logic determines decision making",
      "Control signals like PWM or HIGH/LOW are generated",
      "Actuators respond according to output signals",
    ],
  },

  {
    id: "actuators",
    title: "Actuators",
    category: "Motion",
    theory:
      "Actuators convert electrical energy into mechanical motion. They enable robots to move, rotate, grip, and lift objects.",
    working: [
      "Electrical power is applied to the actuator",
      "Magnetic or electric field is generated",
      "Mechanical torque or force is produced",
      "Speed or position is controlled",
    ],
  },

  {
    id: "sensors",
    title: "Sensors",
    category: "Perception",
    theory:
      "Sensors allow robots to sense their surroundings by detecting physical quantities such as distance, light, or temperature and converting them into electrical signals.",
    working: [
      "Physical quantity is detected",
      "Signal is converted into electrical form",
      "MCU reads sensor data",
      "Robot reacts based on input",
    ],
  },

  {
    id: "power",
    title: "Power System",
    category: "Energy",
    theory:
      "The power system supplies regulated voltage and current to all robot components, ensuring safe and stable operation.",
    working: [
      "Battery provides DC power",
      "Voltage is regulated",
      "Power is distributed to all modules",
      "Protection prevents overload",
    ],
  },

  {
    id: "mechanical",
    title: "Mechanical Structure",
    category: "Structure",
    theory:
      "The mechanical structure forms the physical body of the robot, supporting components and enabling movement.",
    working: [
      "Motors apply torque to joints",
      "Links transmit force",
      "Joints define degrees of freedom",
      "Frame maintains stability",
    ],
  },
];
