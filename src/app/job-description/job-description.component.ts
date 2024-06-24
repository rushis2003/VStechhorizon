import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.scss']
})
export class JobDescriptionComponent implements OnInit {

 


  jobId!: number;
  jobDetails: any;

  constructor(private route: ActivatedRoute, private http :HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobId = +params['id']; // Assuming the parameter is named 'id'
      // Directly implement logic to fetch job details here
      this.jobDetails = this.getJobDetailsById(this.jobId);
    });
  }
  getJobDetailsById(jobId:number){
    this.http.get<any>(`http://192.168.0.3:3006/job/${jobId}`).subscribe(jobs => {
      this.jobDetails = jobs;
    }, error => {
      console.error('Error fetching jobs:', error);
    });;
  }
  // Mock function to fetch job details by id (Replace this with your actual logic)
  // getJobDetailsById(jobId: number): any {
  //   const jobDetailsMap: { [key: number]: any} = {
  //     1: { 
  //       companyProfile: "We are a leading e-learning company dedicated to creating engaging and effective online learning experiences. With a focus on innovative instructional design and cutting-edge technology, we empower learners and organizations to achieve their educational goals.",
  //       position: "Software Developer Intern",
  //       currentOpening: 1,
  //       experienceLevel: "Internship",
  //       primarySkill: [
  //         "Basic understanding of programming languages such as Java, Python, or JavaScript.",
  //         "Familiarity with web development technologies (HTML, CSS, JavaScript).",
  //         "Strong problem-solving skills and attention to detail.",
  //         "Ability to work collaboratively in a team environment.",
  //         "Excellent communication and interpersonal skills."
  //       ],
  //       jobLocation: "Pune (Work from office)",
  //       workDays: "Monday – Friday",
  //       workTimings: "Flexible hours",
  //       salary: "Stipend provided",
  //       educationalQualifications: [
  //         "Currently pursuing a Bachelor’s or Master’s degree in Computer Science, Engineering, or related field."
  //       ],
  //       roleOverview: "As a Software Developer Intern, you will work closely with our development team to gain hands-on experience in software development. You will assist in designing, coding, and testing software applications under the guidance of experienced developers. This internship will provide you with valuable skills and insights into the field of software development.",
  //       requiredRoleAttributes: [
  //         "Assist in the development and maintenance of software applications.",
  //         "Participate in code reviews and debugging sessions.",
  //         "Collaborate with team members to meet project deadlines.",
  //         "Learn and apply best practices in software development.",
  //         "Adapt to new technologies and tools as required."
  //       ],
  //       requiredSkills: [
  //         "Basic understanding of programming concepts and principles.",
  //         "Familiarity with version control systems (e.g., Git).",
  //         "Ability to learn quickly and adapt to new environments.",
  //         "Strong analytical and problem-solving skills.",
  //         "Excellent written and verbal communication skills."
  //       ],
  //       additionalSkills: [
  //         "Knowledge of software development methodologies (e.g., Agile, Scrum).",
  //         "Experience with any programming frameworks or libraries.",
  //         "Understanding of database concepts and SQL.",
  //         "Previous internship or project experience in software development."
  //       ],
  //       careerPath: "Successful interns may be considered for full-time positions as Software Developers based on performance and business needs."
      

  //      },
  //     2: { 
  //       companyProfile: "We are a leading e-learning company dedicated to creating engaging and effective online learning experiences. With a focus on innovative instructional design and cutting-edge technology, we empower learners and organizations to achieve their educational goals.",
  //       position: "Robotic Trainee Intern",
  //       currentOpening: 1,
  //       experienceLevel: "Internship",
  //       primarySkill: [
  //         "Interest in robotics and automation technologies.",
  //         "Willingness to learn and work in a team environment.",
  //         "Strong problem-solving skills and attention to detail.",
  //         "Good communication and interpersonal skills."
  //       ],
  //       jobLocation: "Pune (Work from office)",
  //       workDays: "Monday – Friday",
  //       workTimings: "Flexible hours",
  //       salary: "Stipend provided",
  //       educationalQualifications: [
  //         "Currently pursuing a Bachelor’s or Master’s degree in Robotics, Engineering, Computer Science, or related field."
  //       ],
  //       roleOverview: "As a Robotic Trainee Intern, you will undergo comprehensive training in robotics and automation technologies. You will work closely with experienced engineers to gain hands-on experience in designing, developing, and testing robotic systems. This internship will provide you with valuable skills and knowledge to kickstart your career in robotics.",
  //       requiredRoleAttributes: [
  //         "Participate in training sessions and workshops on robotics concepts and techniques.",
  //         "Assist in basic tasks related to robotic system design and development.",
  //         "Learn and apply fundamental programming skills for robotics applications.",
  //         "Collaborate with team members to complete assigned tasks and projects.",
  //         "Demonstrate initiative and eagerness to learn new technologies."
  //       ],
  //       requiredSkills: [
  //         "Basic understanding of robotics principles and concepts.",
  //         "Interest in programming languages such as Python, C++, or MATLAB.",
  //         "Ability to learn quickly and adapt to new environments.",
  //         "Strong analytical and problem-solving skills.",
  //         "Good teamwork and communication abilities."
  //       ],
  //       additionalSkills: [
  //         "Familiarity with robotic hardware components and sensors.",
  //         "Experience with basic electronics and circuit design.",
  //         "Knowledge of simulation tools for robotics (e.g., ROS, Gazebo).",
  //         "Enthusiasm for exploring emerging trends in robotics and automation."
  //       ],
  //       careerPath: "Successful trainee interns may have the opportunity to transition into full-time roles as Robotics Engineers or continue their education in robotics-related fields."
  //     },
  //     // Add more job details as needed
  //   };
  //   return jobDetailsMap[jobId] || null; // Return job details if found, otherwise null
  // }
  
}

