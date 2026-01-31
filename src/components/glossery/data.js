export const roboticsComponents = [
  {
    id: "mcu",
    title: "Microcontroller Unit",
    category: "Brain",
    model: "/esp8266.glb",
    scale: 0.6,
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
  id: "electric-motor",
  title: "Electric Motor",
  category: "Motion",
  model: "/electric_motor.glb",
  scale: 2.5,
  theory:
    "An electric motor converts electrical energy into continuous rotational mechanical motion. It is widely used in robotics to drive wheels, fans, and mechanical systems.",
  working: [
    "Electrical power is supplied to the motor terminals",
    "A magnetic field is generated inside the motor",
    "Interaction between fields produces torque",
    "The shaft begins rotating",
    "Mechanical motion is transmitted to wheels or mechanisms",
  ],
},

{
  id: "ultrasonic-sensor",
  title: "Ultrasonic Sensor",
  category: "Perception",
  model: "/ultrasonic.glb",   // optional (add when model is ready)
  scale: 12,                 // adjust after viewing
  theory:
    "An ultrasonic sensor measures distance by emitting high-frequency sound waves and calculating the time taken for the echo to return after reflecting from an object. It is widely used in robotics for obstacle detection and distance measurement.",
  working: [
    "The transmitter emits an ultrasonic pulse (typically 40 kHz)",
    "The sound wave travels through air and hits an object",
    "The wave reflects back toward the sensor",
    "The receiver detects the returning echo",
    "The MCU calculates distance using time-of-flight",
  ],
},

{
  id: "rc-radio-transmitter",
  title: "RC Radio Transmitter",
  category: "Communication",
  model: "/rc_controller.glb",   // 3D model of the remote controller
  scale: 25,                     // adjust after preview
  theory:
    "An RC radio transmitter is a handheld device used to send control commands wirelessly to a robot or vehicle. It converts user inputs such as joystick movements and button presses into radio frequency signals that are received and interpreted by a receiver connected to the robot.",
  working: [
    "User moves joysticks or presses buttons on the transmitter",
    "Input signals are processed by the transmitter’s internal circuitry",
    "Control data is encoded into radio frequency signals",
    "RF signals are transmitted wirelessly through an antenna",
    "The receiver on the robot decodes the signals",
    "The MCU executes actions based on received commands",
  ],
},


{
  id: "drone",
  title: "Drone",
  category: "Robotic System",
  model: "/drone.glb",     // quadcopter 3D model
  scale: 0.15,              // adjust after preview
  theory:
    "A drone, also known as an Unmanned Aerial Vehicle (UAV), is a flying robotic system that uses multiple motors and propellers to generate lift and maneuver in the air. Drones integrate sensors, a flight controller, communication modules, and power systems to achieve stable and controlled flight.",
  working: [
    "The battery supplies power to the flight controller and motors",
    "The flight controller processes sensor data from gyroscopes and accelerometers",
    "Control commands are received from a radio transmitter or onboard software",
    "Motor speeds are adjusted independently to control lift and direction",
    "Propellers generate thrust, allowing the drone to take off, hover, and move",
    "Continuous feedback ensures stable and balanced flight",
  ],
},

{
  id: "dht22-sensor",
  title: "DHT22 Temperature & Humidity Sensor",
  category: "Perception",
  model: "/dht22_temperature_sensor_module.glb", // your 3D model file
  scale: 60,                              // adjust after preview
  theory:
    "The DHT22 is a digital temperature and humidity sensor that provides calibrated environmental data using a single-wire communication protocol. It is commonly used in robotics and IoT systems for monitoring ambient conditions such as temperature and relative humidity.",
  working: [
    "The sensor measures temperature using a thermistor",
    "Humidity is measured using a capacitive humidity sensor",
    "An internal ADC converts analog values into digital data",
    "Sensor sends data serially through a single data pin",
    "The MCU decodes the signal to obtain temperature and humidity values",
  ],
},

{
  id: "ir-sensor",
  title: "Infrared (IR) Sensor",
  category: "Perception",
  model: "/ir.glb",        // confirmed file name
  scale: 1.6,              // adjust after preview
  theory:
    "An infrared (IR) sensor detects objects and surface characteristics by emitting infrared light and measuring the reflected radiation. It is commonly used in robotics for obstacle detection, line following, and proximity sensing.",
  working: [
    "The IR LED emits infrared light toward the surface or object",
    "The emitted light reflects back from nearby objects",
    "A photodiode or phototransistor detects the reflected IR light",
    "The sensor converts the received signal into an electrical output",
    "The MCU interprets the signal to make control decisions",
  ],
},

];
