// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { MatDialog } from '@angular/material/dialog';
// import { ProjectKitBuyFormComponent } from '../project-kit-buy-form/project-kit-buy-form.component';

// interface Project {
//   name: string;
//   description: string;
//   image: string;
//   pdf: string;
// }

// interface Group {
//   id: number;
//   name: string;
//   projects: Project[];
// }

// @Component({
//   selector: 'app-steam',
//   templateUrl: './steam.component.html',
//   styleUrls: ['./steam.component.scss']
// })
// export class SteamComponent implements OnInit {

//   showPopup: boolean = true;
//   projectKits: any[] = [];
//   selectedGroup: Group | null = null;

//   constructor(private http: HttpClient,private dialog: MatDialog) { }

//   ngOnInit(): void { }

//   groups: Group[] = [
//     {
//       id: 1,
//       name: 'Group A',
//       projects: [
//         {
//           name: 'Project Kit 1',
//           description: 'Description for Project Kit 1.',
//           image: 'assets/project1.jpg',
//           pdf: 'assets/project1-info.pdf'
//         },
//         // Add more projects for Grades 1-10
//       ]
//     },
//     {
//       id: 2,
//       name: 'Group B',
//       projects: [
//         {
//           name: 'Project Kit 2',
//           description: 'Description for Project Kit 2.',
//           image: 'assets/project2.jpg',
//           pdf: 'assets/project2-info.pdf'
//         },
//         // Add more projects for Grades 11-12 & Diploma
//       ]
//     },
//     {
//       id: 3,
//       name: 'Group c',
//       projects: [
//         {
//           name: 'Project Kit 3',
//           description: 'Description for Project Kit 3.',
//           image: 'assets/project3.jpg',
//           pdf: 'assets/project3-info.pdf'
//         },
//         // Add more projects for Engineering Students
//       ]
//     }
//   ];

//   selectGroup(group: Group): void {
//     this.selectedGroup = group;
//   }


//   buyKit(project: Project): void {
//     // Logic to handle buying kit
//     // Open buy kit form
//     this.openBuyKitForm(project);
//   }

//   openBuyKitForm(project: Project): void {
//     const dialogRef = this.dialog.open(ProjectKitBuyFormComponent, {
//       data: { project } // Pass project data to the form component
//     });

//     // Subscribe to dialog close event
//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       // You can perform actions after the dialog is closed, if needed
//     });
//   }

//   upcomingTechnologies: string[] = [
//     'Artificial Intelligence (AI) and Machine Learning (ML)',
//     'Internet of Things (IoT)',
//     'Robotics and Automation',
//     'Advanced Electronics and Microcontrollers',
//     'Data Science and Big Data',
//     'Blockchain Technology',
//     'Creative Coding and Digital Arts'
//   ];

//   disableScroll() {
//     document.body.classList.add('no-scroll');
//   }

//   enableScroll() {
//     document.body.classList.remove('no-scroll');
//   }
// }




import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ProjectKitBuyFormComponent } from '../project-kit-buy-form/project-kit-buy-form.component';

interface Project {
  name: string;
  description: string;
  image: string;
  pdf: string;
  shortSteps: string;
  fullSteps: string;
  expanded: boolean;
}

interface Group {
  id: number;
  name: string;
  projects: Project[];
}

@Component({
  selector: 'app-steam',
  templateUrl: './steam.component.html',
  styleUrls: ['./steam.component.scss']
})
export class SteamComponent implements OnInit {

  showPopup: boolean = true;
  projectKits: any[] = [];
  selectedGroup: Group | null = null;

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit(): void { }

  groups: Group[] = [
    {
      id: 1,
      name: 'Group A',
      projects: [
        {
          name: 'Hygiene Hero',
          description: 'Teach proper hygiene habits with a hands-free hand sanitizer dispenser.',
          image: "assets/steam/RETOUCHE-white-space-58-scaled-766x575.jpg",
          pdf: 'assets/hygiene-hero-info.pdf',
          shortSteps: 'Step 1: Connect the Water Pump Motor...',
          fullSteps: `Step 1: ❖ Connect the Water Pump Motor to the Output of the PCB
          Step 2: ❖ Now Connect the IR Sensor to the PCB Sensor I/P
          ➢ VCC(IR Sensor) => 5V(Inverter PCB)
          ➢ GND(IR Sensor) => G(Inverter PCB)
          ➢ OUT(IR Sensor) => I/P(Inverter PCB)
          Step 3: ❖ Now it’s time to connect the Battery cap to the Battery & Then connect that 2 pins female JST Connector to the Power(Inverter PCB)`,
          expanded: false
        },
        {
          name: 'Soil Guard (irrigation)',
          description: 'Ensure optimal soil moisture levels for healthy plant growth.',
          image: "/assets/steam/soil-guard.jpg",
          pdf: 'assets/soil-guard-info.pdf',
          shortSteps: 'Step 1: Take the Soil Moisture Sensor...',
          fullSteps: `Steps to Implement:
          Step 1:
          ❖ Take the Soil Moisture Sensor and Comparator and connect both with 2 M-M Jumper
          cables
          Step 2:
          ❖ Now Connect the comparator to the Inverter PCB with 3 M-M Jumper Cables
          VS Tech Horizon
          9
          ➢ VCC(Comparator) => 5V(Inverter PCB)
          ➢ GND(Comparator) => G(Inverter PCB)
          ➢ DO(Comparator) => I/P(Inverter PCB)
          Step 3:
          ❖ Connect the Water Pump Motor to the Output of the PCB
          Step 4:
          ❖ Fix the plastic pipe to the DC Water Pump
          Step 5:
          ❖ Now it’s time to connect the Battery cap to the Battery & Then connect that 2 pins female
          JST Connector to the Power(Inverter PCB)
          Step 6:
          ❖ Now check (If the sensor detects moisture then it should start the Motor)`,
          expanded: false
        },
        {
          name: 'Aqua Sense Pro',
          description: 'Monitor water levels in tanks and alert for refills when necessary.',
          image: "/assets/steam/aqua-sense-pro.jpg",
          pdf: 'assets/aqua-sense-pro-info.pdf',
          shortSteps: 'Step 1: Take the Soil Moisture Sensor...',
          fullSteps: `Step 1:
          ❖ Take the Soil Moisture Sensor and Comparator and connect both with 2 M-M Jumper cables
          Step 2:
          ❖ Now Connect the comparator to the Inverter PCB with 3 M-M Jumper Cables
          ➢ VCC(Comparator) => 5V(Inverter PCB)
          ➢ GND(Comparator) => G(Inverter PCB)
          ➢ DO(Comparator) => I/P(Inverter PCB)
          Step 3:
          ❖ Now Connect the Buzzer to the Inverter PCB Output
          ➢ Long lead => +(Inverter PCB)
          ➢ Short lead => -(Inverter PCB)
          Step 4:
          ❖ Now it’s time to connect the Battery cap to the Battery & Then connect that 2 pins female JST Connector to the Power(Inverter PCB)
          ❖ Now check (When the Soil Moisture Sensor Detects the Moisture automatically Motor will be on)`,
          expanded: false
        },
        {
          name: 'IR Notifier System',
          description: 'Detect intruders with an infrared sensor and activate an alert system.',
          image: 'assets/steam/ir-notifier-system.jpg',
          pdf: 'assets/ir-notifier-system-info.pdf',
          shortSteps: 'Step 1: Connect the IR Sensor to the PCB Sensor I/P...',
          fullSteps: `Step 1:
          ❖ Connect the IR Sensor to the PCB Sensor I/P
          ➢ VCC(IR Sensor) => 5V(Inverter PCB)
          ➢ GND(IR Sensor) => G(Inverter PCB)
          ➢ OUT(IR Sensor) => I/P(Inverter PCB)
          Step 2:
          ❖ Now Connect the LED to the Inverter PCB Output
          ➢ Long lead => +(Inverter PCB)
          ➢ Short lead => -(Inverter PCB)
          Step 3:
          ❖ Now it’s time to connect the Battery cap to the Battery & Then connect that 2 pins female JST Connector to the Power(Inverter PCB)
          ❖ Now check (When IR Detacts Object then LED will get ON)`,
          expanded: false
        },
        {
          name: 'Rain Alert System',
          description: 'Receive alerts when rain is detected to prevent outdoor damage.',
          image: 'assets/steam/Rain Alert System.jpg',
          pdf: 'assets/rain-alert-system-info.pdf',
          shortSteps: 'Step 1: Take the Soil Moisture Sensor...',
          fullSteps: `Step 1:
          ❖ Take the Soil Moisture Sensor and Comparator and connect both with 2 M-M Jumper cables
          Step 2:
          ❖ Now Connect the comparator to the Inverter PCB with 3 M-M Jumper Cables
          ➢ VCC(Comparator) => 5V(Inverter PCB)
          ➢ GND(Comparator) => G(Inverter PCB)
          ➢ DO(Comparator) => I/P(Inverter PCB)
          Step 3:
          ❖ Now Connect the LED to the Inverter PCB Output
          ➢ Long lead => +(Inverter PCB)
          ➢ Short lead => -(Inverter PCB)
          Step 4:
          ❖ Now it’s time to connect the Battery cap to the Battery & Then connect that 2 pins female JST Connector to the Power(Inverter PCB)
          ❖ Now check (When the Soil Moisture Sensor Detects Moisture then the LED will get ON)`,
          expanded: false
        },
        {      
          name: 'Motion Notifier',
          description: 'Detect motion in restricted areas and sound an alarm to notify of unauthorized access.',
          image: 'assets/steam/motion-notifier.jpg',
          pdf: 'assets/motion-notifier-info.pdf',
          shortSteps: 'Step 1: Connect the IR Sensor to the PCB Sensor I/P...',
          fullSteps: `Step 1:
          ❖ Connect the IR Sensor to the PCB Sensor I/P
          ➢ VCC(IR Sensor) => 5V(Inverter PCB)
          ➢ GND(IR Sensor) => G(Inverter PCB)
          ➢ OUT(IR Sensor) => I/P(Inverter PCB)
          Step 2:
          ❖ Now Connect the Buzzer to the Inverter PCB Output
          ➢ Long lead => +(Inverter PCB)
          ➢ Short lead => -(Inverter PCB)
          Step 3:
          ❖ Now it’s time to connect the Battery cap to the Battery & Then connect that 2 pins female JST Connector to the Power(Inverter PCB)
          ❖ Now check (When IR Detects Object then Buzzer will get ON)`,
          expanded: false
        },
        {
          name: 'Defend Alarm',
          description: 'Secure your premises with an alarm system triggered by infrared motion detection.',
          image: 'assets/steam/defend-alarm.jpg',
          pdf: 'assets/defend-alarm-info.pdf',
          shortSteps: 'Step 1: Connect the IR Sensor to the PCB Sensor I/P...',
          fullSteps: `Step 1:
          ❖ Connect the IR Sensor to the PCB Sensor I/P
          ➢ VCC(IR Sensor) => 5V(Inverter PCB)
          ➢ GND(IR Sensor) => G(Inverter PCB)
          ➢ OUT(IR Sensor) => I/P(Inverter PCB)
          Step 2:
          ❖ Now Connect the Buzzer to the Inverter PCB Output
          ➢ Long lead => +(Inverter PCB)
          ➢ Short lead => -(Inverter PCB)
          VS Tech Horizon
          16
          Step 3:
          ❖ Now it’s time to connect the Battery cap to the Battery & Then connect
          that 2 pins female JST Connector to the Power(Inverter PCB)
          ❖ Now check (When the IR Sensor Detects an Object then the Buzzer will
          make a sound)`,
          expanded: false
        },
        {
          name: 'Touchless Doorbell',
          description: 'Welcome guests with a touchless doorbell activated by infrared sensors.',
          image: 'assets/steam/touchless-doorbell.jpg',
          pdf: 'assets/touchless-doorbell-info.pdf',
          shortSteps: 'Step 1: Connect the IR Sensor to the PCB Sensor I/P...',
          fullSteps: `Step 1:
          ❖ Connect the IR Sensor to the PCB Sensor I/P
          ➢ VCC(IR Sensor) => 5V(Inverter PCB)
          ➢ GND(IR Sensor) => G(Inverter PCB)
          ➢ OUT(IR Sensor) => I/P(Inverter PCB)
          Step 2:
          ❖ Now Connect the Buzzer to the Inverter PCB Output
          ➢ Long lead => +(Inverter PCB)
          ➢ Short lead => -(Inverter PCB)
          Step 3:
          ❖ Now it’s time to connect the Battery cap to the Battery & Then connect that 2 pins female JST Connector to the Power(Inverter PCB)
          ❖ Now check (When IR Detects Object then Buzzer will get ON)`,
          expanded: false
        },
        {
          name: 'Water Level Alarm',
          description: 'Prevent flooding by alerting when water levels exceed a safe threshold.',
          image: 'assets/steam/water-level-alarm.jpg',
          pdf: 'assets/water-level-alarm-info.pdf',
          shortSteps: 'Step 1: Connect the Water Pump Motor...',
          fullSteps: `Step 1:
          ❖ Connect the Water Pump Motor to the Output of the PCB
          Step 2:
          ❖ Now Connect the IR Sensor to the PCB Sensor I/P
          ➢ VCC(IR Sensor) => 5V(Inverter PCB)
          ➢ GND(IR Sensor) => G(Inverter PCB)
          ➢ OUT(IR Sensor) => I/P(Inverter PCB)
          Step 3:
          ❖ Now it’s time to connect the Battery cap to the Battery & Then connect that 2 pins female JST Connector to the Power(Inverter PCB)`,
          expanded: false
        },
        {
          name: 'Fire Fighter',
          description: 'Detect smoke and sound an alarm to prevent fire hazards.',
          image: 'assets/steam/fire-fighter.jpg',
          pdf: 'assets/fire-fighter-info.pdf',
          shortSteps: 'Step 1: Connect the IR Sensor to the PCB Sensor I/P...',
          fullSteps: `Step 1:
          ❖ Connect the IR Sensor to the PCB Sensor I/P
          ➢ VCC(IR Sensor) => 5V(Inverter PCB)
          ➢ GND(IR Sensor) => G(Inverter PCB)
          ➢ OUT(IR Sensor) => I/P(Inverter PCB)
          Step 2:
          ❖ Now Connect the Buzzer to the Inverter PCB Output
          ➢ Long lead => +(Inverter PCB)
          ➢ Short lead => -(Inverter PCB)
          Step 3:
          ❖ Now it’s time to connect the Battery cap to the Battery & Then connect that 2 pins female JST Connector to the Power(Inverter PCB)
          ❖ Now check (When IR Detects Object then Buzzer will get ON)`,
          expanded: false
        }
      ]
    },
    {
      id: 2,
      name: 'Group B',
      projects: [
        {
          name: 'Hygiene Hero',
          description: 'Teach proper hygiene habits with a hands-free hand sanitizer dispenser.',
          image: "/assets/steam/hygiene-hero.jpeg",
          pdf: 'assets/hygiene-hero-info.pdf',
          shortSteps: 'Step 1: Connect the Water Pump Motor...',
          fullSteps: `Step 1: ❖ Connect the Water Pump Motor to the Output of the PCB
          Step 2: ❖ Now Connect the IR Sensor to the PCB Sensor I/P
          ➢ VCC(IR Sensor) => 5V(Inverter PCB)
          ➢ GND(IR Sensor) => G(Inverter PCB)
          ➢ OUT(IR Sensor) => I/P(Inverter PCB)
          Step 3: ❖ Now it’s time to connect the Battery cap to the Battery & Then connect that 2 pins female JST Connector to the Power(Inverter PCB)`,
          expanded: false
        },
        {
          name: 'Soil Guard (irrigation)',
          description: 'Ensure optimal soil moisture levels for healthy plant growth.',
          image: "/assets/steam/soil-guard.jpg",
          pdf: 'assets/soil-guard-info.pdf',
          shortSteps: 'Step 1: Take the Soil Moisture Sensor...',
          fullSteps: `Steps to Implement:
          Step 1:
          ❖ Take the Soil Moisture Sensor and Comparator and connect both with 2 M-M Jumper
          cables
          Step 2:
          ❖ Now Connect the comparator to the Inverter PCB with 3 M-M Jumper Cables
          VS Tech Horizon
          9
          ➢ VCC(Comparator) => 5V(Inverter PCB)
          ➢ GND(Comparator) => G(Inverter PCB)
          ➢ DO(Comparator) => I/P(Inverter PCB)
          Step 3:
          ❖ Connect the Water Pump Motor to the Output of the PCB
          Step 4:
          ❖ Fix the plastic pipe to the DC Water Pump
          Step 5:
          ❖ Now it’s time to connect the Battery cap to the Battery & Then connect that 2 pins female
          JST Connector to the Power(Inverter PCB)
          Step 6:
          ❖ Now check (If the sensor detects moisture then it should start the Motor)`,
          expanded: false
        },
        {
          name: 'Aqua Sense Pro',
          description: 'Monitor water levels in tanks and alert for refills when necessary.',
          image: "/assets/steam/aqua-sense-pro.jpg",
          pdf: 'assets/aqua-sense-pro-info.pdf',
          shortSteps: 'Step 1: Take the Soil Moisture Sensor...',
          fullSteps: `Step 1:
          ❖ Take the Soil Moisture Sensor and Comparator and connect both with 2 M-M Jumper cables
          Step 2:
          ❖ Now Connect the comparator to the Inverter PCB with 3 M-M Jumper Cables
          ➢ VCC(Comparator) => 5V(Inverter PCB)
          ➢ GND(Comparator) => G(Inverter PCB)
          ➢ DO(Comparator) => I/P(Inverter PCB)
          Step 3:
          ❖ Now Connect the Buzzer to the Inverter PCB Output
          ➢ Long lead => +(Inverter PCB)
          ➢ Short lead => -(Inverter PCB)
          Step 4:
          ❖ Now it’s time to connect the Battery cap to the Battery & Then connect that 2 pins female JST Connector to the Power(Inverter PCB)
          ❖ Now check (When the Soil Moisture Sensor Detects the Moisture automatically Motor will be on)`,
          expanded: false
        },
        {
          name: 'IR Notifier System',
          description: 'Detect intruders with an infrared sensor and activate an alert system.',
          image: 'assets/steam/ir-notifier-system.jpg',
          pdf: 'assets/ir-notifier-system-info.pdf',
          shortSteps: 'Step 1: Connect the IR Sensor to the PCB Sensor I/P...',
          fullSteps: `Step 1:
          ❖ Connect the IR Sensor to the PCB Sensor I/P
          ➢ VCC(IR Sensor) => 5V(Inverter PCB)
          ➢ GND(IR Sensor) => G(Inverter PCB)
          ➢ OUT(IR Sensor) => I/P(Inverter PCB)
          Step 2:
          ❖ Now Connect the LED to the Inverter PCB Output
          ➢ Long lead => +(Inverter PCB)
          ➢ Short lead => -(Inverter PCB)
          Step 3:
          ❖ Now it’s time to connect the Battery cap to the Battery & Then connect that 2 pins female JST Connector to the Power(Inverter PCB)
          ❖ Now check (When IR Detacts Object then LED will get ON)`,
          expanded: false
        },
        {
          name: 'Rain Alert System',
          description: 'Receive alerts when rain is detected to prevent outdoor damage.',
          image: 'assets/steam/rain-alert-system.jpg',
          pdf: 'assets/rain-alert-system-info.pdf',
          shortSteps: 'Step 1: Take the Soil Moisture Sensor...',
          fullSteps: `Step 1:
          ❖ Take the Soil Moisture Sensor and Comparator and connect both with 2 M-M Jumper cables
          Step 2:
          ❖ Now Connect the comparator to the Inverter PCB with 3 M-M Jumper Cables
          ➢ VCC(Comparator) => 5V(Inverter PCB)
          ➢ GND(Comparator) => G(Inverter PCB)
          ➢ DO(Comparator) => I/P(Inverter PCB)
          Step 3:
          ❖ Now Connect the LED to the Inverter PCB Output
          ➢ Long lead => +(Inverter PCB)
          ➢ Short lead => -(Inverter PCB)
          Step 4:
          ❖ Now it’s time to connect the Battery cap to the Battery & Then connect that 2 pins female JST Connector to the Power(Inverter PCB)
          ❖ Now check (When the Soil Moisture Sensor Detects Moisture then the LED will get ON)`,
          expanded: false
        },
        {      
          name: 'Motion Notifier',
          description: 'Detect motion in restricted areas and sound an alarm to notify of unauthorized access.',
          image: 'assets/steam/motion-notifier.jpg',
          pdf: 'assets/motion-notifier-info.pdf',
          shortSteps: 'Step 1: Connect the IR Sensor to the PCB Sensor I/P...',
          fullSteps: `Step 1:
          ❖ Connect the IR Sensor to the PCB Sensor I/P
          ➢ VCC(IR Sensor) => 5V(Inverter PCB)
          ➢ GND(IR Sensor) => G(Inverter PCB)
          ➢ OUT(IR Sensor) => I/P(Inverter PCB)
          Step 2:
          ❖ Now Connect the Buzzer to the Inverter PCB Output
          ➢ Long lead => +(Inverter PCB)
          ➢ Short lead => -(Inverter PCB)
          Step 3:
          ❖ Now it’s time to connect the Battery cap to the Battery & Then connect that 2 pins female JST Connector to the Power(Inverter PCB)
          ❖ Now check (When IR Detects Object then Buzzer will get ON)`,
          expanded: false
        },
        {
          name: 'Defend Alarm',
          description: 'Secure your premises with an alarm system triggered by infrared motion detection.',
          image: 'assets/steam/defend-alarm.jpg',
          pdf: 'assets/defend-alarm-info.pdf',
          shortSteps: 'Step 1: Connect the IR Sensor to the PCB Sensor I/P...',
          fullSteps: `Step 1:
          ❖ Connect the IR Sensor to the PCB Sensor I/P
          ➢ VCC(IR Sensor) => 5V(Inverter PCB)
          ➢ GND(IR Sensor) => G(Inverter PCB)
          ➢ OUT(IR Sensor) => I/P(Inverter PCB)
          Step 2:
          ❖ Now Connect the Buzzer to the Inverter PCB Output
          ➢ Long lead => +(Inverter PCB)
          ➢ Short lead => -(Inverter PCB)
          VS Tech Horizon
          16
          Step 3:
          ❖ Now it’s time to connect the Battery cap to the Battery & Then connect
          that 2 pins female JST Connector to the Power(Inverter PCB)
          ❖ Now check (When the IR Sensor Detects an Object then the Buzzer will
          make a sound)`,
          expanded: false
        },
        {
          name: 'Touchless Doorbell',
          description: 'Welcome guests with a touchless doorbell activated by infrared sensors.',
          image: 'assets/steam/touchless-doorbell.jpg',
          pdf: 'assets/touchless-doorbell-info.pdf',
          shortSteps: 'Step 1: Connect the IR Sensor to the PCB Sensor I/P...',
          fullSteps: `Step 1:
          ❖ Connect the IR Sensor to the PCB Sensor I/P
          ➢ VCC(IR Sensor) => 5V(Inverter PCB)
          ➢ GND(IR Sensor) => G(Inverter PCB)
          ➢ OUT(IR Sensor) => I/P(Inverter PCB)
          Step 2:
          ❖ Now Connect the Buzzer to the Inverter PCB Output
          ➢ Long lead => +(Inverter PCB)
          ➢ Short lead => -(Inverter PCB)
          Step 3:
          ❖ Now it’s time to connect the Battery cap to the Battery & Then connect that 2 pins female JST Connector to the Power(Inverter PCB)
          ❖ Now check (When IR Detects Object then Buzzer will get ON)`,
          expanded: false
        },
        {
          name: 'Water Level Alarm',
          description: 'Prevent flooding by alerting when water levels exceed a safe threshold.',
          image: 'assets/steam/water-level-alarm.jpg',
          pdf: 'assets/water-level-alarm-info.pdf',
          shortSteps: 'Step 1: Connect the Water Pump Motor...',
          fullSteps: `Step 1:
          ❖ Connect the Water Pump Motor to the Output of the PCB
          Step 2:
          ❖ Now Connect the IR Sensor to the PCB Sensor I/P
          ➢ VCC(IR Sensor) => 5V(Inverter PCB)
          ➢ GND(IR Sensor) => G(Inverter PCB)
          ➢ OUT(IR Sensor) => I/P(Inverter PCB)
          Step 3:
          ❖ Now it’s time to connect the Battery cap to the Battery & Then connect that 2 pins female JST Connector to the Power(Inverter PCB)`,
          expanded: false
        },
        {
          name: 'Fire Fighter',
          description: 'Detect smoke and sound an alarm to prevent fire hazards.',
          image: 'assets/steam/fire-fighter.jpg',
          pdf: 'assets/fire-fighter-info.pdf',
          shortSteps: 'Step 1: Connect the IR Sensor to the PCB Sensor I/P...',
          fullSteps: `Step 1:
          ❖ Connect the IR Sensor to the PCB Sensor I/P
          ➢ VCC(IR Sensor) => 5V(Inverter PCB)
          ➢ GND(IR Sensor) => G(Inverter PCB)
          ➢ OUT(IR Sensor) => I/P(Inverter PCB)
          Step 2:
          ❖ Now Connect the Buzzer to the Inverter PCB Output
          ➢ Long lead => +(Inverter PCB)
          ➢ Short lead => -(Inverter PCB)
          Step 3:
          ❖ Now it’s time to connect the Battery cap to the Battery & Then connect that 2 pins female JST Connector to the Power(Inverter PCB)
          ❖ Now check (When IR Detects Object then Buzzer will get ON)`,
          expanded: false
        }
      ]
    },
    {
      id: 3,
      name: 'Group C',
      projects: [
      ]
    }
  ];




 

  selectGroup(group: Group): void {
    this.selectedGroup = group;
  }

  formatSteps(steps: string): string {
    // Split the steps by newline
    const stepsArray = steps.split('\n').filter(step => step.trim() !== '');

    // Process each step to make the step number bold
    return stepsArray.map(step => {
      return step.replace(/(Step \d+:)/, '<b>$1</b>');
    }).join('<br/>');
  }


  toggleExpand(project: Project): void {
    project.expanded = !project.expanded;
  }

  buyKit(project: Project): void {
    this.openBuyKitForm(project);
  }

  openBuyKitForm(project: Project): void {
    const dialogRef = this.dialog.open(ProjectKitBuyFormComponent, {
      data: { project }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  scrollToProjects() {
    const element = document.getElementById('project-details');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  upcomingTechnologies: string[] = [
    'Artificial Intelligence (AI) and Machine Learning (ML)',
    'Internet of Things (IoT)',
    'Robotics and Automation',
    'Advanced Electronics and Microcontrollers',
    'Data Science and Big Data',
    'Blockchain Technology',
    'Creative Coding and Digital Arts'
  ];

  disableScroll() {
    document.body.classList.add('no-scroll');
  }

  enableScroll() {
    document.body.classList.remove('no-scroll');
}
}