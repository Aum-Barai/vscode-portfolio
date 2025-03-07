import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <>
      <h3>About Me</h3>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Education</h4>
          <div className={styles.education}>
            <div>
              <span className={styles.schoolName}>Charotar University of Science and Technology</span>
              <span className={styles.location}>Anand, Gujarat</span>
            </div>
            <div className={styles.date}>September 2022 - June 2026</div>
            <div>B.Tech in Artificial Intelligence and Machine Learning</div>
            <div className={styles.grade}>CGPA (5th sem): 8.14</div>
          </div>
          <div className={styles.education}>
            <div>
              <span className={styles.schoolName}>UTKARSH SCHOOL OF EXCELLENCE</span>
              <span className={styles.location}>Rajkot, Gujarat</span>
            </div>
            <div className={styles.date}>2020 - 2022</div>
            <div className={styles.grade}>HSC overall percentage: 72%</div>
          </div>
        </div>
        
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Experience</h4>
          <div className={styles.job}>
            <div>
              <span className={styles.company}>WizDevelopers</span>
              <span className={styles.location}>Remote</span>
            </div>
            <div className={styles.role}>Data Analyst Intern (May 2024 - August 2024)</div>
            <ul className={styles.jobDescription}>
              <li>Analyzed large-scale POS system data and complex healthcare management datasets containing 100+ tables, deriving actionable insights for decision-making.</li>
              <li>Conducted a comprehensive SWOT analysis of market competitors, identifying key strengths and areas for improvement.</li>
              <li>Developed data visualization dashboards to present trends and business intelligence insights.</li>
              <li>Worked within an Agile framework, ensuring efficient inter-team communication and iterative progress tracking.</li>
            </ul>
          </div>
          
          <div className={styles.job}>
            <div>
              <span className={styles.company}>Clumoss</span>
              <span className={styles.location}>Remote</span>
            </div>
            <div className={styles.role}>AI/ML Intern (August 2023 - September 2023)</div>
            <ul className={styles.jobDescription}>
              <li>Gained hands-on experience with machine learning algorithms and data preprocessing techniques.</li>
              <li>Developed and optimized data transformation pipelines for improved model performance.</li>
              <li>Researched and integrated emerging technologies to enhance ML applications, improving efficiency and scalability.</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Skills</h4>
          <div className={styles.skillsList}>
            <div className={styles.skillCategory}>
              <div className={styles.skillTitle}>Machine Learning & AI</div>
              <div>Python, PyTorch, Neural Networks, Deep Learning</div>
            </div>
            <div className={styles.skillCategory}>
              <div className={styles.skillTitle}>Data Science & Analytics</div>
              <div>NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, Power BI, Tableau</div>
            </div>
            <div className={styles.skillCategory}>
              <div className={styles.skillTitle}>Programming Languages</div>
              <div>Python, C/C++, SQL</div>
            </div>
            <div className={styles.skillCategory}>
              <div className={styles.skillTitle}>Tools & Technologies</div>
              <div>Git, Docker, Flask, Django</div>
            </div>
            <div className={styles.skillCategory}>
              <div className={styles.skillTitle}>Soft Skills</div>
              <div>Problem-solving, Decision-making, Project Coordination, Critical Thinking, Team Management</div>
            </div>
          </div>
        </div>
        
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Publications</h4>
          <div className={styles.publication}>
            <div className={styles.publicationTitle}>DemocraticNet: A Deep Learning Pipeline for Multi-Class Multi-Label Ministry News Classification</div>
            <div className={styles.conference}>ICTCS 2024: Ninth International Conference on Information and Communication Technology for Competitive Strategies</div>
          </div>
          <div className={styles.publication}>
            <div className={styles.publicationTitle}>AI-Enhanced Quad-Wheeled Robot for Targeted Plant Disease Surveillance in Greenhouses</div>
            <div className={styles.conference}>Global Conference on Information Technologies and Communications (GCITC) 2023</div>
          </div>
        </div>
        
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Leadership & Activities</h4>
          <ul className={styles.activities}>
            <li>Cleared Preliminary Round, ISRO Robotics Challenge - URSC 2025</li>
            <li>Undergraduate Student Fellowship Program Member</li>
            <li>Member, Board of Studies, Computer Science Engineering & IT, CHARUSAT</li>
            <li>Student Coordinator, University-Level Student Council, CHARUSAT</li>
            <li>License Holder & Core Team Member, TEDxCHARUSAT (September 24, 2024)</li>
            <li>Student Representative, Executive Central Council</li>
            <li>Core Team, Cognizance, CHARUSAT's annual tech-fest</li>
            <li>Event lead, AI-ML Club, CHARUSAT</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
