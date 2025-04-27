# Question

# Camber Coding Interview – Frontend / Full-stack

### Objective
Implement basic UI for EV (electric vehicle) charger simulator

### Key Terms
• Electric Vehicle Charger - a device used to charge electric vehicles and is defined by:
o ID of the charger (can be generated automatically)
o State of the charger: offline (default), online, charging, fault
• Electric Vehicle Charger Simulator – software used to simulate behavior or EV chargers
o This project doesn’t require the implementation of the simulator, just the UI to manage simulator list
• Charger Management System (CMS) - cloud software that manages connected EV chargers
o For the purposes of this project, there is no need to model or implement CMS

### Goals
• Design user interface to create and manage EV charger simulators
• The user interface should support the following operations
o Add charger simulator - create charger in "offline" state
o Remove charger simulator
o Charger simulator commands
▪ Turn on (change state to "online")
▪ Start charging (change state to "charging")
▪ Stop charging (change state to "ready")
▪ Simulate fault (change state to “fault”)

• Assume single tenant and user system (there is no need to implement support for customers or accounts)
• Store all the data in the local store (data can be lost if the browser is restarted)
• Use any frameworks/libraries (react preferred)


# How to run the application
* run command `npm install` to install dependencies
* run command `npm start` to start the application