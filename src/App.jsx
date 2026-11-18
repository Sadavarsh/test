import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Menu, X, ArrowRight, ArrowUpRight, Bell, CalendarDays, GraduationCap, FileText, Download, Trophy, Users, FlaskConical, Cpu, Leaf, BookOpen, Medal, Lightbulb } from 'lucide-react';
import logo from './assets/bkbiet-logo.png';
import campusMain from './assets/campus-main.jpg';
import campusGarden from './assets/campus-garden.jpg';
import nccCadets from './assets/ncc-cadets.jpg';
import campusPanorama from './assets/campus-panorama-clean.jpg';
import campusBuilding from './assets/campus-building.jpg';
import campusPanoramaReference from './assets/campus-panorama-reference.jpg';

const navigation = [
  { label: 'About Us', items: ['About the Institute', 'Vision & Mission', 'Director’s Message'] },
  { label: 'Administration', items: ['Governing Body', 'Leadership', 'Committees'] },
  { label: 'Academics', items: ['Academic Overview', 'Academic Calendar', 'Examinations'] },
  { label: 'Departments', items: ['Computer Science', 'Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering'] },
  { label: 'Admissions', items: ['Admission Overview', 'Eligibility', 'Fee Structure'] },
  { label: 'Campus Life', items: ['Student Activities', 'Clubs & Societies', 'Hostel Life'] },
  { label: 'Placements', items: ['Placement Cell', 'Recruiters', 'Placement Records'] },
  { label: 'Research', items: ['Research & Development', 'Projects', 'Publications'] },
  { label: 'Contact', items: [] },
];

const slides = [
  {
    image: campusMain,
    eyebrow: 'B.K. BIRLA INSTITUTE OF ENGINEERING & TECHNOLOGY',
    title: 'Building Knowledge.\nShaping Tomorrow.',
    description: 'A vibrant learning environment where ideas grow, skills take shape and future engineers find their direction.',
    action: 'Explore BKBIET',
    position: 'center 56%',
  },
  {
    image: campusGarden,
    eyebrow: 'LEARN · INNOVATE · EXCEL',
    title: 'A Campus That\nInspires Possibilities.',
    description: 'Discover a welcoming campus designed to support academic focus, collaboration and all-round development.',
    action: 'Discover Our Campus',
    position: 'center 52%',
  },
  {
    image: campusPanorama,
    eyebrow: 'WELCOME TO BKBIET PILANI',
    title: 'A Place to Learn,\nBelong and Become.',
    description: 'Explore a campus community that brings together academic learning, personal growth and opportunities for tomorrow.',
    action: 'Get to Know BKBIET',
    position: 'center 50%',
  },
  {
    image: nccCadets,
    eyebrow: 'BEYOND THE CLASSROOM',
    title: 'Character, Confidence\n& Leadership.',
    description: 'From discipline to teamwork, student activities create opportunities to grow, contribute and lead.',
    action: 'Experience Campus Life',
    position: 'center 45%',
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="site-header">
      <div className="identity-wrap">
        <div className="identity-inner">
          <a className="logo-link" href="#home" aria-label="BKBIET home">
            <img className="college-logo" src={logo} alt="B.K. Birla Institute of Engineering & Technology emblem" />
          </a>
          <div className="college-identity">
            <p className="identity-kicker">SHREE KRISHNARPAN CHARITY TRUST</p>
            <h1>B.K. Birla Institute of Engineering<br className="desktop-break" /> &amp; Technology</h1>
            <div className="identity-rule" />
            <p className="college-location">Pilani – 333031, Rajasthan, India</p>
            <p className="affiliation">Approved by AICTE, New Delhi &amp; Affiliated to Bikaner Technical University, Bikaner</p>
          </div>
          <div className="identity-side" aria-label="Institute location">
            <span className="side-mark">BKBIET</span>
            <span className="side-caption">ENGINEERING<br />&amp; TECHNOLOGY</span>
            <span className="side-location">PILANI · RAJASTHAN</span>
          </div>
          <button className="mobile-menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        <div className="nav-inner">
          {navigation.map((item) => (
            <div className="nav-item" key={item.label}>
              <button className={`nav-link ${activeDropdown === item.label ? 'selected' : ''}`} type="button" onClick={() => item.items.length ? setActiveDropdown(activeDropdown === item.label ? null : item.label) : setActiveDropdown(null)} aria-expanded={item.items.length ? activeDropdown === item.label : undefined}>
                {item.label}{item.items.length > 0 && <ChevronDown className="nav-chevron" size={14} strokeWidth={2.5} />}
              </button>
              {item.items.length > 0 && <div className={`dropdown ${activeDropdown === item.label ? 'dropdown-open' : ''}`}>
                {item.items.map((child) => <a href="#" key={child} onClick={(event) => event.preventDefault()}>{child}</a>)}
              </div>}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}

function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = slides[active];

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const previous = () => setActive((index) => (index - 1 + slides.length) % slides.length);
  const next = () => setActive((index) => (index + 1) % slides.length);

  return (
    <section className="hero" aria-label="BKBIET highlights" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hero-image" style={{ backgroundImage: `url(${current.image})`, backgroundPosition: current.position }} key={current.image} />
      <div className="hero-shade" />
      <div className="hero-content" key={`content-${active}`}>
        <span className="hero-eyebrow"><span />{current.eyebrow}</span>
        <h2>{current.title.split('\n').map((line, index) => <React.Fragment key={line}>{index > 0 && <br />}{line}</React.Fragment>)}</h2>
        <p>{current.description}</p>
        <a className="hero-cta" href="#about">{current.action}<ArrowRight size={17} /></a>
      </div>
      <div className="hero-controls">
        <button className="hero-arrow" type="button" aria-label="Previous slide" onClick={previous}><ChevronLeft size={23} /></button>
        <div className="hero-dots" aria-label="Choose slide">
          {slides.map((slide, index) => <button key={slide.eyebrow} type="button" className={`hero-dot ${active === index ? 'active' : ''}`} aria-label={`Show slide ${index + 1}`} aria-current={active === index ? 'true' : undefined} onClick={() => setActive(index)} />)}
        </div>
        <button className="hero-arrow" type="button" aria-label="Next slide" onClick={next}><ChevronRight size={23} /></button>
      </div>
      <div className="hero-counter"><strong>0{active + 1}</strong><span />0{slides.length}</div>
      <div className="hero-bottom-line" />
    </section>
  );
}


const noticeItems = [
  { date: '18 NOV 2026', title: 'Applications invited for the Student Innovation Challenge 2026.' },
  { date: '15 NOV 2026', title: 'Updated academic calendar and semester activity schedule released.' },
  { date: '12 NOV 2026', title: 'Workshop registration open for emerging technologies and career skills.' },
  { date: '08 NOV 2026', title: 'Library and learning resource centre timings during examination preparation.' },
];

const eventItems = [
  { day: '22', month: 'NOV', title: 'Technology & Innovation Showcase', detail: 'Explore student prototypes, ideas and practical projects.' },
  { day: '27', month: 'NOV', title: 'Expert Talk: Careers in Engineering', detail: 'An interactive session with industry professionals.' },
  { day: '04', month: 'DEC', title: 'Inter-Department Sports Meet', detail: 'A celebration of teamwork and sportsmanship.' },
];

const studentLinks = [
  { icon: BookOpen, title: 'Academic Information', detail: 'Timetables, academic calendar and examination updates.' },
  { icon: GraduationCap, title: 'Student Services', detail: 'Guidance, support and important student resources.' },
];

function CampusUpdates() {
  return (
    <section className="updates-reference" id="updates">
      <div className="updates-reference-inner">
        <div className="reference-section-title">
          <span className="reference-eyebrow">WHAT'S HAPPENING</span>
          <h2>LATEST FROM CAMPUS</h2>
          <span className="reference-title-rule"><i /></span>
        </div>
        <div className="reference-updates-grid">
          <article className="reference-update-card">
            <h3><Bell size={17} fill="currentColor" /> Latest News / Notices</h3>
            <div className="reference-scroll-list">
              {noticeItems.map((item) => (
                <div className="reference-notice" key={item.title}>
                  <small>{item.date}</small>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
            <a className="reference-view-all" href="#student-highlights">View all »</a>
          </article>
          <article className="reference-update-card">
            <h3><CalendarDays size={17} fill="currentColor" /> Upcoming Events</h3>
            <div className="reference-scroll-list">
              {eventItems.map((item) => (
                <div className="reference-event" key={item.title}>
                  <span className="reference-event-date"><b>{item.day}</b><small>{item.month}</small></span>
                  <div><p>{item.title}</p><small>{item.detail}</small></div>
                </div>
              ))}
            </div>
            <a className="reference-view-all" href="#campus-life">View all »</a>
          </article>
          <article className="reference-update-card">
            <h3><GraduationCap size={19} fill="currentColor" /> Student's Corner</h3>
            <div className="reference-student-links">
              {studentLinks.map(({ icon: Icon, title, detail }) => (
                <a href="#campus-life" className="reference-student-link" key={title}>
                  <span><Icon size={18} /></span>
                  <div><strong>{title}</strong><small>{detail}</small></div>
                  <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
            <a className="reference-view-all" href="#campus-life">View all »</a>
          </article>
        </div>
      </div>
    </section>
  );
}

const highlightItems = [
  { date: '18 NOV 2026', title: 'Young minds turning classroom concepts into practical solutions', image: campusBuilding, label: 'INNOVATION' },
  { date: '14 NOV 2026', title: 'Students building teamwork, confidence and leadership', image: nccCadets, label: 'LEADERSHIP' },
  { date: '09 NOV 2026', title: 'A campus community that encourages curiosity and growth', image: campusGarden, label: 'CAMPUS COMMUNITY' },
];

function StudentHighlights() {
  return (
    <section className="reference-highlights" id="student-highlights">
      <div className="reference-content-width">
        <div className="reference-centered-title">
          <span className="reference-eyebrow">CELEBRATING EXCELLENCE</span>
          <h2>Student Highlights</h2>
          <p>Recognising the talent, creativity and achievements of the BKBIET community.</p>
        </div>
        <div className="reference-highlight-grid">
          {highlightItems.map((item) => (
            <article className="reference-highlight-card" key={item.title}>
              <div className="reference-highlight-image">
                <img src={item.image} alt={item.label} />
                <span className="reference-highlight-tag">{item.label}</span>
              </div>
              <div className="reference-highlight-body">
                <time>{item.date}</time>
                <h3>{item.title}</h3>
                <a href="#campus-life">Read More <span>→</span></a>
              </div>
            </article>
          ))}
        </div>
        <a className="reference-highlight-button" href="#campus-life">View All Highlights</a>
      </div>
    </section>
  );
}

const campusStories = [
  { category: 'CAMPUS', title: 'A welcoming environment for learning and discovery', image: campusMain, size: 'large' },
  { category: 'INSTITUTE', title: 'Spaces designed to support student growth', image: campusPanoramaReference, size: 'small' },
  { category: 'STUDENT LIFE', title: 'Building confidence through teamwork', image: nccCadets, size: 'small' },
  { category: 'GREEN CAMPUS', title: 'A refreshing campus with room to recharge', image: campusGarden, size: 'small' },
  { category: 'CAMPUS SPACES', title: 'Explore the place where ideas take shape', image: campusBuilding, size: 'small' },
  { category: 'BKBIET PILANI', title: 'A campus community with opportunities to grow', image: campusPanorama, size: 'wide' },
];

function CampusLife() {
  return (
    <section className="reference-campus-life" id="campus-life">
      <div className="reference-content-width">
        <div className="reference-centered-title">
          <span className="reference-eyebrow">LIFE AT BKBIET</span>
          <h2>Campus Life</h2>
          <p>Discover the experiences, spaces and people that make life at BKBIET memorable.</p>
        </div>
        <div className="reference-campus-grid">
          {campusStories.map((item, index) => (
            <article className={`reference-campus-card campus-card-${index + 1} ${item.size}`} key={item.title}>
              <img src={item.image} alt={item.category} />
              <div className="reference-campus-overlay">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const circularItems = [
  'B.Tech. and B.Arch. Admission Information 2027',
  'M.Tech. Programme Admission Guidelines',
  'Scholarship and Financial Assistance Details',
  'Academic Registration and Semester Instructions',
  'Research and Postgraduate Programme Updates',
  'Student Internship and Training Opportunities',
  'Examination Forms and Assessment Schedule',
  'First Year Orientation and Induction Programme',
  'Internal Assessment and Practical Examination Notice',
  'Fee Submission Schedule for the Upcoming Semester',
  'Final Year Project and Research Guidelines',
];

const downloadItems = [
  'Academic Calendar – 2026–2027',
  'Student Handbook and Campus Guidelines',
  'Scholarship Application Information',
  'Hostel and Transport Information',
  'Training and Placement Registration Notice',
  'Holiday List and Institute Working Days',
  'Important Student Forms and Downloads',
  'Library Membership and Digital Resources Guide',
  'Anti-Ragging Undertaking and Student Declaration',
  'Placement Cell Registration and Instructions',
  'Hostel Leave Application and Student Request Forms',
];

function NewsAlerts() {
  return (
    <section className="reference-alerts" id="alerts">
      <div className="reference-alert-intro">
        <span>INFORMATION DESK</span>
        <h2>Notices & Important Updates</h2>
        <p>Find admission information, academic circulars, student notices and useful downloads.</p>
      </div>
      <div className="reference-alert-grid">
        <article className="reference-alert-card">
          <div className="reference-alert-card-head">
            <span className="reference-alert-icon"><FileText size={20} /></span>
            <div><h3>Academic / Admission Circulars</h3><small>Admissions, programmes & academic information</small></div>
            <b className="reference-alert-count">{circularItems.length}</b>
          </div>
          <div className="reference-alert-list">
            {circularItems.map((item, index) => (
              <a href="#footer" className="reference-alert-row" key={item}>
                <span className="reference-alert-file"><FileText size={16} /></span>
                <span className="reference-alert-text">{item}</span>
                {index < 4 && <b className="new-stamp">NEW</b>}
                <Download className="reference-alert-download" size={15} />
              </a>
            ))}
          </div>
        </article>
        <article className="reference-alert-card">
          <div className="reference-alert-card-head">
            <span className="reference-alert-icon"><Bell size={20} /></span>
            <div><h3>Notices / Downloads</h3><small>Student notices, forms & institute downloads</small></div>
            <b className="reference-alert-count">{downloadItems.length}</b>
          </div>
          <div className="reference-alert-list">
            {downloadItems.map((item, index) => (
              <a href="#footer" className="reference-alert-row" key={item}>
                <span className="reference-alert-file"><FileText size={16} /></span>
                <span className="reference-alert-text">{item}</span>
                {index < 6 && <b className="new-stamp">NEW</b>}
                <Download className="reference-alert-download" size={15} />
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

const footerGroups = [
  {
    title: 'Quick Links',
    links: [
      ['Admissions', '#alerts'],
      ['Academic Programmes', '#updates'],
      ['Departments', '#campus-life'],
      ['Training & Placement', '#student-highlights'],
      ['Student Support', '#updates'],
      ['Campus Facilities', '#campus-life'],
    ],
  },
  {
    title: 'Institute',
    links: [
      ['About BKBIET', '#home'],
      ['News & Announcements', '#updates'],
      ['Events', '#updates'],
      ['Student Achievements', '#student-highlights'],
      ['Campus Life', '#campus-life'],
      ['Contact & Location', '#footer'],
    ],
  },
  {
    title: 'Important Links',
    links: [
      ['Admission Circulars', '#alerts'],
      ['Notices & Downloads', '#alerts'],
      ['Academic Calendar', '#alerts'],
      ['Scholarship Information', '#alerts'],
      ['Career Opportunities', '#alerts'],
      ['Alumni', '#footer'],
    ],
  },
];

function Footer() {
  return (
    <footer className="reference-footer" id="footer">
      <div className="reference-footer-main">
        <div className="reference-footer-brand">
          <img src={logo} alt="B.K. Birla Institute of Engineering & Technology logo" />
          <p><strong>B.K. Birla Institute of Engineering & Technology</strong><br />Pilani, Rajasthan – 333031, India</p>
          <p className="footer-contact-label">Shree Krishnarpan Charity Trust</p>
        </div>
        {footerGroups.map((group) => (
          <div className="reference-footer-links" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="reference-footer-bottom">
        © {new Date().getFullYear()} B.K. Birla Institute of Engineering & Technology, Pilani. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div id="home" className="page-shell">
      <Header />
      <main>
        <HeroSlider />
        <CampusUpdates />
        <StudentHighlights />
        <NewsAlerts />
        <CampusLife />
      </main>
      <Footer />
    </div>
  );
}
