export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  tagline: string;
  iconName: string;
  category: 'core' | 'specialized' | 'support';
  overview: string;
  whatWeDo: string[];
  howItWorks: { step: string; title: string; description: string }[];
  keyBenefits: { title: string; description: string }[];
  whyItMatters: string;
  deliverables: string[];
  faqs: { question: string; answer: string }[];
}

export interface SpecialtyItem {
  id: string;
  name: string;
  category: string;
  iconName: string;
  description: string;
  commonChallenges: string[];
  ourSupport: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export const COMPANY_INFO = {
  name: 'UR RCM CONSULTANCY LLC',
  legalName: 'UR RCM CONSULTANCY LLC',
  shortName: 'UR RCM',
  tagline: 'Smarter Revenue Cycle Management. Stronger Healthcare Practices.',
  subtagline: 'Focused on accuracy. Built around your practice.',
  address: {
    street: '5900 BALCONES DRIVE STE 11101',
    city: 'AUSTIN',
    state: 'TX',
    zip: '78731',
    country: 'United States',
    full: '5900 BALCONES DRIVE STE 11101, AUSTIN, TX 78731, United States',
  },
  phone: '(512) 890-3412',
  email: 'info@urrcmconsultancy.com',
  hours: 'Monday – Friday: 8:00 AM – 6:00 PM CST',
  copyrightYear: 2026,
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'medical-billing',
    slug: 'medical-billing',
    title: 'Medical Billing',
    tagline: 'Precision Billing Workflows to Accelerate Reimbursement',
    shortDesc: 'Professional billing support designed to improve workflow efficiency and help providers manage the entire claims lifecycle.',
    iconName: 'ReceiptText',
    category: 'core',
    overview: 'Medical billing requires meticulous attention to detail, strict adherence to payer-specific rules, and consistent follow-through. UR RCM CONSULTANCY LLC provides structured billing support designed to handle charge entry, electronic claims transmission, payment posting, and clearinghouse validation so your practice experiences fewer billing delays.',
    whatWeDo: [
      'Daily charge capture and demographic verification',
      'Electronic claims preparation and primary/secondary submission',
      'Electronic Remittance Advice (ERA) and manual Explanation of Benefits (EOB) posting',
      'Patient responsibility balance calculation and statement reconciliation',
      'Payer clearinghouse rejection tracking and immediate correction',
      'Regular reimbursement auditing against payer fee schedules',
    ],
    howItWorks: [
      { step: '01', title: 'Data Intake & Verification', description: 'Patient encounter notes, superbills, and demographic information are verified for completeness before entry.' },
      { step: '02', title: 'Charge Entry & Scrubbing', description: 'Encounter data is entered into billing software and pre-scrubbed against payer medical policies and CCI edits.' },
      { step: '03', title: 'Electronic Transmission', description: 'Claims are submitted electronically through secure clearinghouses with level-one audit validation.' },
      { step: '04', title: 'Payment Posting & Reconciliation', description: 'ERAs and payments are reconciled, verifying contract allowances, co-pays, deductibles, and contractual write-offs.' },
    ],
    keyBenefits: [
      { title: 'Reduced Administrative Burden', description: 'Enables clinical and front-office staff to redirect attention to patient care rather than billing inquiries.' },
      { title: 'Consistent Claim Flow', description: 'Daily claim processing minimizes batching backlogs and supports consistent cash flow cycles.' },
      { title: 'Clear Financial Visibility', description: 'Detailed month-end reporting clarifies charges, payments, contractual adjustments, and outstanding balances.' },
    ],
    whyItMatters: 'With continually shifting payer guidelines, delayed claim submissions can translate directly to revenue lag. A dedicated billing workflow maintains operational momentum.',
    deliverables: [
      'Daily claim transmission confirmation reports',
      'Payment posting and deposit balance audits',
      'Payer denial and clearinghouse rejection logs',
      'Monthly practice billing summary reports',
    ],
    faqs: [
      { question: 'What billing software platforms do you support?', answer: 'We interface with widely used EHR and Practice Management platforms, adapting to your existing software ecosystem without disrupting your historical records.' },
      { question: 'How quickly are charges processed after encounters?', answer: 'We structure workflows for timely charge entry, typically within 24 to 48 hours of documentation receipt.' },
      { question: 'Who handles patient billing questions?', answer: 'We can support patient billing statement generation and assist your administrative team with patient inquiries based on your practice preference.' },
    ],
  },
  {
    id: 'medical-coding',
    slug: 'medical-coding',
    title: 'Medical Coding',
    tagline: 'Accurate Clinical Documentation Translation & Compliance',
    shortDesc: 'Accurate coding support focused on appropriate documentation, coding practices, and payer requirements.',
    iconName: 'FileCode2',
    category: 'core',
    overview: 'Accurate medical coding is the bedrock of compliance and timely reimbursement. UR RCM CONSULTANCY LLC provides professional coding support across ICD-10-CM, CPT, and HCPCS Level II, ensuring every documented clinical service is represented cleanly without undercoding or overcoding.',
    whatWeDo: [
      'Comprehensive ICD-10-CM, CPT, and HCPCS Level II code assignment',
      'Evaluation & Management (E/M) service level review and documentation correlation',
      'Correct Coding Initiative (CCI) edit and modifier appropriateness review',
      'Clinical documentation improvement (CDI) query guidance for providers',
      'Specialty-specific coding audits to identify vulnerability areas',
      'Telehealth and modern care management coding guidance',
    ],
    howItWorks: [
      { step: '01', title: 'Clinical Record Review', description: 'Certified coders review physician clinical documentation, progress notes, and diagnostic reports.' },
      { step: '02', title: 'Code Selection & Crosswalk', description: 'Services are mapped to exact diagnostic and procedural codes meeting medical necessity guidelines.' },
      { step: '03', title: 'Modifier & CCI Scrub', description: 'Bundling rules, mutually exclusive procedure edits, and appropriate modifiers are validated.' },
      { step: '04', title: 'Feedback Loop', description: 'Documentation discrepancies are flagged constructively to help clinicians maintain compliant chart notes.' },
    ],
    keyBenefits: [
      { title: 'Documentation Integrity', description: 'Accurate coding safeguards your practice from payer compliance audits and clawbacks.' },
      { title: 'Minimized Coding Denials', description: 'Proper modifier usage and medical necessity alignment prevent avoidable front-end rejections.' },
      { title: 'Appropriate Reimbursement', description: 'Captures legitimate complexity of care provided without risking regulatory non-compliance.' },
    ],
    whyItMatters: 'Medical coding errors remain one of the leading drivers of initial claim rejections and payer post-payment audits. Precision coding protects both revenue and regulatory standing.',
    deliverables: [
      'Scrubbed coding logs with verified modifiers',
      'E/M distribution and documentation pattern reviews',
      'Quarterly compliance review summaries',
    ],
    faqs: [
      { question: 'Do you work with specialty-specific coding rules?', answer: 'Yes. Coding rules vary significantly between surgical, behavioral, musculoskeletal, and primary care environments. We assign coders experienced in your specialty.' },
      { question: 'How do you handle ambiguous physician documentation?', answer: 'We establish a respectful, structured physician query process to clarify documentation without making clinical assumptions.' },
    ],
  },
  {
    id: 'claims-management',
    slug: 'claims-management',
    title: 'Claims Management',
    tagline: 'End-to-End Tracking from Pre-Submission to Final Adjudication',
    shortDesc: 'Support throughout the claim lifecycle, from preparation and submission to follow-up and resolution.',
    iconName: 'SendHorizontal',
    category: 'core',
    overview: 'Submitting a claim is only the first step. UR RCM CONSULTANCY LLC provides active claims management that tracks claims continuously through clearinghouse receipt, payer acceptance, adjudication, and settlement, resolving front-end edits before they turn into stagnant aging.',
    whatWeDo: [
      'Pre-submission claim scrubbing against national and local coverage determinations',
      'Daily 277CA claim acknowledgment review and rapid rejection correction',
      'Payer electronic attachment and medical records submission coordination',
      'Secondary and tertiary claim crossing with primary EOB coordination',
      'Clearinghouse rule tuning to address repeat payer edits',
      'Active tracking of pending and suspended claims within payer processing queues',
    ],
    howItWorks: [
      { step: '01', title: 'Payer-Specific Scrub', description: 'Claims are audited against up-to-date payer clearinghouse validation rules.' },
      { step: '02', title: 'Secure EDI Transmission', description: 'Claims are routed through secure 837 EDI pipelines to commercial and government payers.' },
      { step: '03', title: '277 Status Monitoring', description: 'We monitor EDI status responses within 24 hours to intercept initial payer-level edits.' },
      { step: '04', title: 'Adjudication Follow-Through', description: 'We track claims through payment determination, addressing requests for additional documentation immediately.' },
    ],
    keyBenefits: [
      { title: 'Fewer First-Pass Rejections', description: 'Rigorous pre-submission validation ensures claims reach adjudicators cleanly.' },
      { title: 'Accelerated Turnaround', description: 'Prompt responses to clearinghouse rejections shorten days in accounts receivable.' },
      { title: 'Secondary Payer Coordination', description: 'Timely crossing to secondary insurers prevents patient balance confusion.' },
    ],
    whyItMatters: 'A claim delayed at the clearinghouse level is a claim unpaid. Proactive claims monitoring prevents submissions from languishing silently in payer queues.',
    deliverables: [
      'First-pass acceptance rate tracking',
      'Clearinghouse rejection resolution log',
      'Weekly adjudication progress updates',
    ],
    faqs: [
      { question: 'How do you manage claims requiring paper attachments?', answer: 'While we prioritize electronic attachments via 275 transactions, we coordinate certified mail or secure payer portal submissions when required by specific payers.' },
    ],
  },
  {
    id: 'denial-management',
    slug: 'denial-management',
    title: 'Denial Management',
    tagline: 'Root-Cause Investigation & Strategic Appeal Workflows',
    shortDesc: 'Identify denial patterns, investigate root causes, and support timely resolution of outstanding claims.',
    iconName: 'ShieldAlert',
    category: 'core',
    overview: 'Denials cost practices both time and legitimate revenue. UR RCM CONSULTANCY LLC approaches denial management with forensic rigor: analyzing CARC and RARC remark codes, identifying operational root causes, preparing substantiated appeals, and preventing repeat denials.',
    whatWeDo: [
      'Comprehensive denial categorization by payer, provider, code, and reason',
      'Timely investigation of Claim Adjustment Reason Codes (CARC) and Remittance Advice Remark Codes (RARC)',
      'Substantive appeal letter preparation backed by clinical records and payer policy citations',
      'Root-cause feedback loop to front-office and clinical documentation teams',
      'Payer peer-to-peer review scheduling and documentation packet assembly',
      'Tracking of appeal deadlines and payer statutory response windows',
    ],
    howItWorks: [
      { step: '01', title: 'Denial Ingestion & Tagging', description: 'Zero-pay ERAs and paper EOBs are tagged immediately with root-cause category codes.' },
      { step: '02', title: 'Cause Analysis', description: 'Specialists differentiate between technical defects, medical necessity denials, and eligibility issues.' },
      { step: '03', title: 'Correction or Appeal', description: 'Technical errors are re-billed; clinical denials are appealed with targeted medical records and policy references.' },
      { step: '04', title: 'Systemic Prevention', description: 'Findings are communicated to practice leadership to close operational loopholes upstream.' },
    ],
    keyBenefits: [
      { title: 'Recovered Revenue', description: 'Structured appeals recover funds from valid claims that might otherwise be written off.' },
      { title: 'Upstream Prevention', description: 'Identifying recurring patterns prevents identical denials from impacting future claims.' },
      { title: 'Strict Timeliness Compliance', description: 'Never miss strict 60-, 90-, or 180-day payer appeal submission deadlines.' },
    ],
    whyItMatters: 'Industry studies show up to 60% of denied claims are never appealed due to lack of staff bandwidth. Structured denial management rescues legitimate revenue.',
    deliverables: [
      'Monthly denial trend and root-cause analysis',
      'Appeals submitted and overturned logs',
      'Front-end workflow recommendation summaries',
    ],
    faqs: [
      { question: 'How do you decide which denied claims to appeal?', answer: 'We evaluate every denial against payer clinical policy and contractual obligations, prioritizing high-value claims and systemic denial patterns.' },
    ],
  },
  {
    id: 'accounts-receivable',
    slug: 'accounts-receivable',
    title: 'Accounts Receivable Management',
    tagline: 'Systematic Follow-Up to Reduce Aging and Stabilize Cash Flow',
    shortDesc: 'Structured follow-up and A/R management designed to reduce aging and improve collection workflows.',
    iconName: 'TrendingUp',
    category: 'core',
    overview: 'Unresolved accounts receivable tie up vital working capital. UR RCM CONSULTANCY LLC implements structured aging bucket workflows—targeting 30, 60, 90, and 120+ day balances with disciplined payer follow-up, escalation protocols, and transparent status logging.',
    whatWeDo: [
      'Systematic aging bucket stratification (30, 60, 90, 120+ days)',
      'Direct payer representative inquiries via phone, web portals, and EDI status requests',
      'Resolution of underpaid claims against contracted fee schedules',
      'Timely filing limit tracking and dispute escalation',
      'Credit balance research and compliant refund processing',
      'Clear, actionable A/R aging reports shared regularly with practice leadership',
    ],
    howItWorks: [
      { step: '01', title: 'Aging Stratification', description: 'Outstanding balances are parsed by payer class, balance size, and aging bracket.' },
      { step: '02', title: 'Targeted Inquiries', description: 'A/R specialists contact payers to investigate pending, held, or underpaid claims.' },
      { step: '03', title: 'Claim Adjudication Action', description: 'Prompt provision of requested information or formal escalation to payer supervisors.' },
      { step: '04', title: 'Status Documentation', description: 'Every interaction is documented in your billing software with clear next-action dates.' },
    ],
    keyBenefits: [
      { title: 'Lower Days in A/R', description: 'Disciplined follow-up moves claims out of aging buckets and into settled revenue.' },
      { title: 'Underpayment Detection', description: 'Identifies instances where payers reimburse below contracted allowable rates.' },
      { title: 'No Claim Left Behind', description: 'Systematic workflows ensure smaller-balance claims are not neglected.' },
    ],
    whyItMatters: 'The older an outstanding balance becomes, the less likely it is to be collected. Consistent, early follow-up is the most reliable remedy for revenue leakage.',
    deliverables: [
      'A/R aging bucket breakdown reports',
      'Payer resolution and payment tracking summaries',
      'Timely filing danger-zone alerts',
    ],
    faqs: [
      { question: 'Do you work on existing old A/R backlogs?', answer: 'Yes. We frequently conduct legacy A/R recovery projects to evaluate, prioritize, and pursue collectible balances that accumulated prior to our partnership.' },
    ],
  },
  {
    id: 'credentialing',
    slug: 'credentialing',
    title: 'Provider Credentialing',
    tagline: 'Streamlined Enrollment & Maintenance with Commercial and Government Payers',
    shortDesc: 'Support for provider enrollment, credentialing processes, payer applications, and related administrative requirements.',
    iconName: 'Award',
    category: 'specialized',
    overview: 'Provider enrollment and credentialing can be an administrative bottleneck that delays new providers from seeing patients or billing in-network. UR RCM CONSULTANCY LLC handles CAQH profile maintenance, payer applications, re-credentialing cycles, and hospital privilege documentation.',
    whatWeDo: [
      'CAQH ProView profile creation, quarterly attestation, and document updates',
      'Medicare (PECOS) and state Medicaid enrollment and revalidation support',
      'Commercial insurance panel application preparation and status tracking',
      'National Provider Identifier (NPI) registration and updates (Type 1 and Type 2)',
      'Hospital and ambulatory surgery center (ASC) privilege application assistance',
      'Payer contract tracking and credentialing expiration alert management',
    ],
    howItWorks: [
      { step: '01', title: 'Documentation Gathering', description: 'We compile licenses, DEA certificates, malpractice insurance, board certifications, and CVs.' },
      { step: '02', title: 'Application Preparation', description: 'Payer-specific enrollment forms are prepared accurately to prevent processing halts.' },
      { step: '03', title: 'Payer Follow-Up', description: 'Regular check-ins with payer enrollment committees track progress through credentialing cycles.' },
      { step: '04', title: 'Effective Date Confirmation', description: 'We secure formal in-network confirmation letters and verify provider billing linkages in payer systems.' },
    ],
    keyBenefits: [
      { title: 'Faster Time-to-Bill', description: 'Expedited enrollment allows new providers to generate in-network revenue sooner.' },
      { title: 'Prevented Panel Lapses', description: 'Proactive tracking prevents surprise credentialing lapses and billing interruptions.' },
      { title: 'Reduced Provider Headache', description: 'Relieves clinicians of hundreds of pages of repetitive administrative paperwork.' },
    ],
    whyItMatters: 'Billing out-of-network or without active credentialing results in severe reimbursement delays and frustrated patients. Proactive enrollment keeps panels active.',
    deliverables: [
      'Payer enrollment status dashboard',
      'CAQH quarterly attestation records',
      'Credentialing expiration calendar',
    ],
    faqs: [
      { question: 'How long does commercial payer credentialing typically take?', answer: 'Payer credentialing commonly takes between 60 to 120 days depending on the carrier. Early application submission and diligent follow-up are critical.' },
    ],
  },
  {
    id: 'eligibility-verification',
    slug: 'eligibility-verification',
    title: 'Eligibility & Benefits Verification',
    tagline: 'Front-End Coverage Verification to Prevent Back-End Disappointments',
    shortDesc: 'Help verify patient insurance eligibility and benefits before services are provided.',
    iconName: 'UserCheck',
    category: 'support',
    overview: 'Over 70% of initial billing errors trace back to inaccurate patient coverage information gathered before the appointment. UR RCM CONSULTANCY LLC provides front-end eligibility and benefits verification to confirm coverage, deductibles, copays, and network status before care is rendered.',
    whatWeDo: [
      'Real-time and batch insurance eligibility verification prior to scheduled appointments',
      'Copay, coinsurance, and remaining deductible balance calculation',
      'Primary, secondary, and tertiary coverage coordination validation',
      'In-network versus out-of-network benefit level verification',
      'Payer policy exclusion and benefit limitation identification',
      'Front-desk collection summary sheet preparation',
    ],
    howItWorks: [
      { step: '01', title: 'Schedule Sync', description: 'We review upcoming appointment schedules 48 to 72 hours in advance.' },
      { step: '02', title: 'Portal & EDI Inquiry', description: 'Eligibility is confirmed directly via 270/271 EDI transactions or payer portals.' },
      { step: '03', title: 'Benefits Breakdown', description: 'Exact coverage details, remaining deductibles, and patient out-of-pocket estimates are compiled.' },
      { step: '04', title: 'EHR Update', description: 'Verification notes are entered cleanly into your practice management schedule for the front desk.' },
    ],
    keyBenefits: [
      { title: 'Higher Point-of-Service Collections', description: 'Front-desk staff know the exact patient balance to collect upon arrival.' },
      { title: 'Drastic Drop in Coverage Denials', description: 'Identifies terminated policies and missing pre-certifications before treatment.' },
      { title: 'Better Patient Transparency', description: 'Helps patients understand their financial obligations clearly in advance.' },
    ],
    whyItMatters: 'Collecting copays and deductibles at the time of service is significantly easier and cheaper than chasing balances via post-encounter statements.',
    deliverables: [
      'Daily verified appointment schedule logs',
      'Patient estimated cost responsibility sheets',
      'Terminated policy alerts for clinic follow-up',
    ],
    faqs: [
      { question: 'Can you verify benefits for same-day or add-on patients?', answer: 'Yes, we establish dedicated communication channels for urgent eligibility checks for walk-in or add-on clinical encounters.' },
    ],
  },
  {
    id: 'prior-authorization',
    slug: 'prior-authorization',
    title: 'Prior Authorization Support',
    tagline: 'Administrative Workflow Support for Timely Clinical Clearances',
    shortDesc: 'Administrative support for authorization workflows to help reduce avoidable delays and billing issues.',
    iconName: 'CheckCheck',
    category: 'specialized',
    overview: 'Prior authorizations create substantial friction between clinical recommendations and payer approval. UR RCM CONSULTANCY LLC provides administrative workflow support—gathering documentation, submitting authorizations via payer portals, tracking review statuses, and assisting with peer-to-peer prep.',
    whatWeDo: [
      'Payer authorization requirement checking based on CPT codes and diagnosis',
      'Clinical chart note, lab result, and radiology report compilation',
      'Secure portal and electronic prior authorization (ePA) submission',
      'Persistent tracking of review queues against scheduled procedure dates',
      'Coordination of peer-to-peer physician reviews when initial authorization is questioned',
      'Documenting approval numbers and validity periods directly in practice records',
    ],
    howItWorks: [
      { step: '01', title: 'Order Intake', description: 'Scheduled diagnostic tests, surgeries, or specialized therapies are screened for authorization needs.' },
      { step: '02', title: 'Submission Packet', description: 'Relevant clinical documentation matching payer medical policy is assembled and submitted.' },
      { step: '03', title: 'Status Tracking', description: 'Specialists check payer portals daily to prevent requests from stalling in queues.' },
      { step: '04', title: 'Approval Delivery', description: 'Authorization numbers, approved dates, and covered units are linked to the scheduled encounter.' },
    ],
    keyBenefits: [
      { title: 'Reduced Procedure Rescheduling', description: 'Timely clearances prevent last-minute cancellations of costly procedures.' },
      { title: 'Elimination of "No Auth" Denials', description: 'Zero-pay denials due to missing prior authorizations are virtually eliminated.' },
      { title: 'Clinician Focus Preservation', description: 'Saves physicians and nurses countless hours navigating hold queues and repetitive payer forms.' },
    ],
    whyItMatters: 'Retroactive authorizations are rarely granted by commercial payers. Ensuring proper authorization before treatment is essential to guaranteeing claim viability.',
    deliverables: [
      'Prior authorization tracking register',
      'Expiring authorization warnings',
      'Payer turnaround metric summaries',
    ],
    faqs: [
      { question: 'Do you make medical decisions during authorization?', answer: 'No. Our role is strictly administrative. We compile and submit the clinical documentation prepared by your medical staff according to payer guidelines.' },
    ],
  },
  {
    id: 'patient-billing',
    slug: 'patient-billing',
    title: 'Patient Billing Support',
    tagline: 'Clear, Respectful Patient Statements and Administrative Inquiries',
    shortDesc: 'Professional support for patient billing workflows and administrative communication.',
    iconName: 'CreditCard',
    category: 'support',
    overview: 'Patient out-of-pocket responsibilities continue to grow due to high-deductible health plans. UR RCM CONSULTANCY LLC supports clear, professional, and compliant patient billing statements that explain balances simply, helping practices improve patient collections while maintaining positive patient relationships.',
    whatWeDo: [
      'Clear, understandable patient statement preparation following insurance adjudication',
      'Verification that insurance adjustments and payments are posted prior to statement release',
      'Support for patient payment plan establishment following practice credit guidelines',
      'Patient billing inquiries and dispute escalation to practice management',
      'Small balance write-off recommendations in accordance with practice financial policies',
      'Coordination of soft reminder notices and final notice workflows',
    ],
    howItWorks: [
      { step: '01', title: 'Post-Adjudication Audit', description: 'Statements are generated only after all primary and secondary payer adjudications are finalized.' },
      { step: '02', title: 'Clear Balance Formatting', description: 'Itemized statements clearly explain what insurance paid and why the patient owes the remaining balance.' },
      { step: '03', title: 'Patient Inquiries Support', description: 'Billing support responds courteously to questions regarding coverage, deductibles, and statement line items.' },
      { step: '04', title: 'Resolution & Posting', description: 'Patient payments are recorded promptly and matched against open encounter balances.' },
    ],
    keyBenefits: [
      { title: 'Improved Patient Satisfaction', description: 'Patients appreciate transparent, easily understandable explanations of their healthcare costs.' },
      { title: 'Faster Patient Collections', description: 'Prompt, clear statements encourage quicker patient payment turnaround.' },
      { title: 'Compassionate Professionalism', description: 'Maintains your practice’s caring reputation during financial interactions.' },
    ],
    whyItMatters: 'Confusion over medical bills is a leading source of patient dissatisfaction. Clear statements protect the patient-provider relationship.',
    deliverables: [
      'Statement cycle distribution logs',
      'Patient payment reconciliation reports',
      'Outstanding patient balance aging summaries',
    ],
    faqs: [
      { question: 'Are you a collection agency?', answer: 'No. UR RCM CONSULTANCY LLC provides professional billing administration and patient customer service support. We do not act as an aggressive collection agency.' },
    ],
  },
  {
    id: 'revenue-cycle-management',
    slug: 'revenue-cycle-management',
    title: 'Complete Revenue Cycle Management',
    tagline: 'End-to-End Strategic Integration Across the Entire Financial Lifecyle',
    shortDesc: 'Integrated revenue cycle support across multiple stages of the healthcare financial workflow.',
    iconName: 'Layers',
    category: 'core',
    overview: 'When each stage of the revenue cycle operates in a silo, revenue leakage occurs at the seams. UR RCM CONSULTANCY LLC provides complete, integrated Revenue Cycle Management that connects front-desk verification, coding, claims submission, denial resolution, and A/R recovery into a unified operational engine.',
    whatWeDo: [
      'Holistic alignment of front-end, mid-cycle, and back-end billing processes',
      'Continuous practice financial visibility with structured periodic reviews',
      'Identification and remediation of systemic operational bottlenecks',
      'Payer fee schedule review and reimbursement analysis',
      'Dedicated account management with direct communication channels',
      'Scalable operational infrastructure that grows with your practice expansion',
    ],
    howItWorks: [
      { step: '01', title: 'Understand & Onboard', description: 'We map your existing clinical workflows, practice management configuration, and historical challenges.' },
      { step: '02', title: 'Analyze & Calibrate', description: 'We identify systemic leakage points, denial triggers, and uncollected revenue opportunities.' },
      { step: '03', title: 'Execute & Optimize', description: 'Our full team assumes operational responsibility across each revenue cycle phase.' },
      { step: '04', title: 'Review & Evolve', description: 'Regular executive reviews evaluate key performance indicators and refine operational strategies.' },
    ],
    keyBenefits: [
      { title: 'Comprehensive Visibility', description: 'Gain deep, transparent insights into practice financial metrics without administrative chaos.' },
      { title: 'Reduced Overhead', description: 'Eliminate the stress, training overhead, and turnover costs of managing a large in-house billing team.' },
      { title: 'Practice Scalability', description: 'Add new providers, specialties, or locations without straining your administrative backbone.' },
    ],
    whyItMatters: 'A fragmented revenue cycle creates unmonitored gaps where claims slip through. Full RCM integration provides consistent accountability from appointment to deposit.',
    deliverables: [
      'Comprehensive monthly executive RCM reports',
      'Key performance indicator (KPI) dashboards',
      'Quarterly operational strategy sessions',
      'Continuous workflow recommendations',
    ],
    faqs: [
      { question: 'How is complete RCM structured for pricing?', answer: 'We tailor our engagement model to the structure and volume of your practice, typically based on a transparent percentage of collections or structured service tiers.' },
      { question: 'Do we lose control over our practice finances?', answer: 'Never. You maintain 100% ownership and visibility into your bank deposits, practice management software, and patient records at all times. We act as your specialized operational partner.' },
    ],
  },
];

export const SPECIALTIES_LIST: SpecialtyItem[] = [
  {
    id: 'primary-care',
    name: 'Primary Care & Family Medicine',
    category: 'General Medicine',
    iconName: 'Stethoscope',
    description: 'High-volume encounter workflows requiring efficient E/M coding, preventive wellness checks, chronic care management, and rapid claim turnaround.',
    commonChallenges: ['Vaccine administration coding', 'Chronic Care Management (CCM) documentation', 'High claim volume management'],
    ourSupport: 'Streamlined daily batch processing, accurate preventive vs. diagnostic modifier application, and point-of-service copay tracking.',
  },
  {
    id: 'internal-medicine',
    name: 'Internal Medicine',
    category: 'General Medicine',
    iconName: 'Activity',
    description: 'Complex multi-condition patient encounters, prolonged care services, diagnostic testing, and coordinated care billing across specialty referrals.',
    commonChallenges: ['Complex medical decision making (MDM) documentation', 'Multiple chronic condition management', 'Prior auth for specialty diagnostics'],
    ourSupport: 'Comprehensive E/M coding review, proper coordination of care billing, and disciplined follow-up on multi-condition claims.',
  },
  {
    id: 'mental-health',
    name: 'Mental & Behavioral Health',
    category: 'Behavioral Care',
    iconName: 'Brain',
    description: 'Individual psychotherapy, psychiatric evaluations, telehealth sessions, group therapy, and varying payer-specific behavioral health authorizations.',
    commonChallenges: ['Time-based psychotherapy CPT code thresholds', 'Telehealth modifier rules by state and payer', 'Session frequency limits'],
    ourSupport: 'Precise time-based coding crosswalks, telehealth place-of-service validation, and proactive authorization tracking.',
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    category: 'Cardiovascular',
    iconName: 'HeartPulse',
    description: 'Diagnostic echocardiography, stress testing, cardiac catheterization, telemetry monitoring, and combined professional/technical component split billing.',
    commonChallenges: ['Modifier 26 / TC component separation', 'Medical necessity documentation for cardiac imaging', 'High-cost implantable device billing'],
    ourSupport: 'Specialized modifier scrubbing, strict diagnostic documentation alignment, and secondary payer follow-through.',
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics & Sports Medicine',
    category: 'Surgical & Musculoskeletal',
    iconName: 'Bone',
    description: 'Surgical global periods, fracture care, joint injections, durable medical equipment (DME), and physical therapy crossover claims.',
    commonChallenges: ['10-day vs. 90-day surgical global fee period billing', 'Modifier 59 / XS unbundling scrutiny', 'DME payer pre-certifications'],
    ourSupport: 'Global period tracking, appropriate distinct procedural service modifier auditing, and surgical pre-authorization coordination.',
  },
  {
    id: 'dermatology',
    name: 'Dermatology & Dermatopathology',
    category: 'Specialty Care',
    iconName: 'Sparkles',
    description: 'Biopsies, lesion removals, Mohs micrographic surgery, cosmetic vs. medical service separation, and pathology lab technical components.',
    commonChallenges: ['Cosmetic vs. medically necessary lesion removal criteria', 'Mohs stage and tissue block coding', 'Same-day biopsy with E/M visit'],
    ourSupport: 'Accurate modifier 25 application with substantiated clinical rationale and clear patient cosmetic responsibility tracking.',
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    category: 'Specialty Care',
    iconName: 'Baby',
    description: 'Early and Periodic Screening, Diagnostic and Treatment (EPSDT) services, complex state immunization registries, and commercial/Medicaid plans.',
    commonChallenges: ['Vaccine administration counseling codes', 'State Medicaid managed care plan variances', 'Developmental screening billing'],
    ourSupport: 'Medicaid guidelines compliance, state registry code coordination, and rapid front-end eligibility verification for growing families.',
  },
  {
    id: 'radiology',
    name: 'Radiology & Imaging Centers',
    category: 'Diagnostic Services',
    iconName: 'Scan',
    description: 'High-volume diagnostic imaging reads, professional component billing for independent reading groups, and technical facility claims.',
    commonChallenges: ['Order-to-read crosswalk verification', 'High-density clearinghouse rejections', 'Referring provider NPI missing from claims'],
    ourSupport: 'Automated order and referring provider credential verification, clean electronic batching, and swift discrepancy correction.',
  },
  {
    id: 'physical-therapy',
    name: 'Physical & Occupational Therapy',
    category: 'Rehabilitation',
    iconName: 'Accessibility',
    description: 'Timed 15-minute therapy units (8-minute rule), plan of care re-evaluations, therapy cap thresholds, and specialized functional limitation reporting.',
    commonChallenges: ['CMS 8-minute rule calculations', 'Payer annual therapy dollar or visit caps', 'Functional reporting modifier requirements'],
    ourSupport: 'Strict unit-to-time audit checks, ongoing visit count tracking against payer authorizations, and proactive renewal alerts.',
  },
  {
    id: 'laboratories',
    name: 'Clinical Laboratories & Pathology',
    category: 'Diagnostic Services',
    iconName: 'FlaskConical',
    description: 'Clinical CLIA lab panels, molecular diagnostics, toxicology screens, and pathology specimen interpretations with complex payer medical policies.',
    commonChallenges: ['CLIA certification number requirements on claims', 'MolDX program and local coverage determinations', 'High initial denial rates for high-complexity tests'],
    ourSupport: 'Rigorous diagnostic code linkage, CLIA validation checks, and rapid appeal packet assembly for medical necessity inquiries.',
  },
  {
    id: 'surgical-practices',
    name: 'General & Ambulatory Surgery',
    category: 'Surgical & Musculoskeletal',
    iconName: 'Scissors',
    description: 'Multiple procedure payment reductions, co-surgeon and assistant surgeon billing, operative note coding, and ASC facility fee coordination.',
    commonChallenges: ['Multiple procedure discounting rules', 'Assistant at surgery (modifiers 80, 81, 82, AS)', 'Operative report specificity for complex resections'],
    ourSupport: 'Detailed operative report auditing, correct modifier assignment, and structured appeals for improperly discounted secondary procedures.',
  },
  {
    id: 'specialty-clinics',
    name: 'Multi-Specialty & Urgent Care Clinics',
    category: 'Specialty Care',
    iconName: 'Building2',
    description: 'Fast-paced, walk-in environments requiring real-time patient eligibility, point-of-service collections, and diverse multi-provider billing.',
    commonChallenges: ['High patient churn and rapid turnover', 'S-code urgent care facility billing vs. standard E/M', 'Credentialing for rotating providers'],
    ourSupport: 'Rapid-response eligibility verification, structured daily reconciliation, and flexible provider roster management.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understand',
    tagline: 'Discovery & Workflow Assessment',
    description: 'We learn about your practice, current billing software, specialty nuances, administrative workflows, challenges, and financial goals.',
    details: [
      'Comprehensive intake review of current billing setup',
      'Assessment of existing software and clearinghouse integrations',
      'Analysis of practice specialty requirements and payer mix',
      'Identification of immediate operational pain points',
    ],
  },
  {
    step: '02',
    title: 'Analyze',
    tagline: 'Data Review & Opportunity Mapping',
    description: 'We review existing revenue cycle processes, historical aging balances, denial trends, and clearinghouse rejection logs to identify opportunities for improvement.',
    details: [
      'In-depth review of historical accounts receivable aging',
      'Root-cause categorization of common payer denials',
      'Evaluation of fee schedules and contracted allowances',
      'Pinpointing front-end data collection leakage',
    ],
  },
  {
    step: '03',
    title: 'Optimize',
    tagline: 'Structured Implementation & Execution',
    description: 'We implement structured processes designed around your operational requirements, establishing disciplined daily billing rhythms and clean workflows.',
    details: [
      'Establishment of standard operating procedures for charge intake',
      'Deployment of pre-submission claim scrubbing protocols',
      'Integration of systematic aging bucket follow-up schedules',
      'Creation of clear communication channels with your clinic staff',
    ],
  },
  {
    step: '04',
    title: 'Support',
    tagline: 'Continuous Communication & Monitoring',
    description: 'We continuously communicate, monitor workflows, track key indicators, and support ongoing improvement as your healthcare organization evolves.',
    details: [
      'Regular executive reporting and transparent metric reviews',
      'Ongoing adaptation to emerging payer policies and coding changes',
      'Support for provider credentialing updates and panel expansions',
      'Dedicated account manager responsiveness for all inquiries',
    ],
  },
];

export const WHY_CHOOSE_US_PILLARS = [
  {
    title: 'Accuracy',
    subtitle: 'Attention to detail throughout the revenue cycle',
    iconName: 'Crosshair',
    description: 'Medical billing is a game of precision. A misplaced modifier or demographic typo can stall a claim for weeks. Our workflows prioritize multi-level verification to ensure claims are clean before submission.',
  },
  {
    title: 'Transparency',
    subtitle: 'Clear communication and understandable reporting',
    iconName: 'LineChart',
    description: 'You should never have to wonder about the status of your cash flow. We provide structured, readable reports and open communication so your leadership always understands your practice’s financial health.',
  },
  {
    title: 'Efficiency',
    subtitle: 'Streamlined workflows designed to reduce administrative friction',
    iconName: 'Zap',
    description: 'By establishing disciplined daily rhythms for charge entry, ERA reconciliation, and clearinghouse checks, we minimize lag times and prevent claims from gathering dust in aging queues.',
  },
  {
    title: 'Expertise',
    subtitle: 'Professional support across complex billing and RCM processes',
    iconName: 'ShieldCheck',
    description: 'From navigating complex commercial payer medical policies to managing Medicare revalidations and surgical global fees, our specialized knowledge helps your practice overcome administrative obstacles.',
  },
  {
    title: 'Partnership',
    subtitle: 'Solutions designed around each client’s operational needs',
    iconName: 'Handshake',
    description: 'We do not believe in rigid, one-size-fits-all templates. We adapt our support to your practice management software, your clinic schedule, and your internal staff structure.',
  },
];

export const COMPARISON_DATA = [
  {
    area: 'Claim Preparation & Scrubbing',
    traditional: 'Occasional batching, basic manual checks, high rate of clearinghouse rejection.',
    urrcm: 'Daily electronic intake with multi-layer scrubbing against CCI edits, LCDs, and payer rules before release.',
  },
  {
    area: 'Denial Management',
    traditional: 'Reactive handling; denied claims are frequently written off or left unaddressed due to limited time.',
    urrcm: 'Forensic root-cause investigation, categorized CARC/RARC tagging, and substantiated appeals within statutory windows.',
  },
  {
    area: 'Accounts Receivable (A/R)',
    traditional: 'Aging claims accumulate past 90+ days; limited staff bandwidth to call payer hold queues.',
    urrcm: 'Disciplined aging bucket workflows (30/60/90/120+) with proactive representative inquiries and escalation.',
  },
  {
    area: 'Reporting & Transparency',
    traditional: 'Dense, confusing software printouts delivered infrequently with minimal actionable context.',
    urrcm: 'Clear executive summaries, trend analysis, and scheduled operational reviews that practice managers can understand.',
  },
  {
    area: 'Staff Turnover & Training',
    traditional: 'High billing staff turnover requires constant recruitment, onboarding, and training downtime.',
    urrcm: 'Stable, dedicated operational partner providing continuous coverage without interruption or overhead spikes.',
  },
];

export const ARTICLES_LIST: ArticleItem[] = [
  {
    id: 'denial-prevention-strategies',
    slug: 'denial-prevention-strategies',
    title: 'Navigating Modern Denial Prevention: Root-Cause Workflows for Healthcare Providers',
    category: 'Denial Management',
    readTime: '6 min read',
    date: '2026-02-15',
    excerpt: 'How healthcare practices can transition from reactive denial appeals to proactive root-cause prevention across front-office and clinical documentation workflows.',
    content: [
      'In today’s healthcare administrative environment, claim denials continue to represent one of the largest sources of avoidable revenue friction. While many practices invest significant effort into appealing denied claims after the fact, the most sustainable financial improvement comes from analyzing why denials occur in the first place.',
      'A structured denial prevention strategy begins with standardized categorization. Rather than treating all zero-pay remits identically, claims should be tagged by root-cause: technical formatting defects, patient eligibility discrepancies, missing prior authorizations, medical necessity challenges, or non-covered service exclusions.',
      'By establishing a feedback loop between the billing team and the clinical staff, recurring denial patterns can be addressed upstream. For example, if a specific commercial payer repeatedly denies an ultrasound procedure for lack of documentation, modifying the clinical intake template ensures required indications are documented at the point of care.',
      'Ultimately, moving from reactive appeals to proactive prevention shortens days in accounts receivable and strengthens long-term operational resilience.',
    ],
    keyTakeaways: [
      'Classify denials systematically using CARC and RARC remark codes.',
      'Address the front-office data capture errors that trigger up to 70% of initial rejections.',
      'Establish a monthly feedback review between billing specialists and clinical leadership.',
    ],
  },
  {
    id: 'reducing-ar-aging-past-60-days',
    slug: 'reducing-ar-aging-past-60-days',
    title: 'Managing Accounts Receivable Aging: Practical Strategies for the 60+ Day Danger Zone',
    category: 'Revenue Cycle Management',
    readTime: '5 min read',
    date: '2026-01-28',
    excerpt: 'Why claims over 60 days in A/R experience a steep decline in collectability, and how structured bucket workflows prevent revenue leakage.',
    content: [
      'Every experienced practice administrator knows the uncomfortable reality of the accounts receivable aging report: the older a claim becomes, the less likely your practice is to collect the full reimbursement owed.',
      'Industry benchmarks indicate that claims remaining unpaid past 60 to 90 days face substantially higher write-off risks due to payer timely filing restrictions, changed patient coverage, or unaddressed technical rejections.',
      'An effective A/R recovery strategy requires disciplined bucket stratification. Rather than allowing staff to randomly review open accounts, tasks should be segmented by aging tier and payer class. High-dollar claims approaching timely filing thresholds must receive immediate escalation.',
      'Furthermore, tracking payer underpayments—where a carrier pays less than the fee schedule negotiated in your provider contract—uncovers significant revenue that often goes unnoticed in high-volume practices.',
    ],
    keyTakeaways: [
      'Establish automated alerts for claims crossing the 45-day threshold.',
      'Prioritize aging claims by balance amount and payer timely filing deadlines.',
      'Regularly audit remits against contracted payer fee schedules to catch systematic underpayments.',
    ],
  },
  {
    id: 'prior-authorization-operational-efficiency',
    slug: 'prior-authorization-operational-efficiency',
    title: 'Prior Authorization Best Practices: Reducing Patient Wait Times and Avoidable Denials',
    category: 'Practice Management',
    readTime: '7 min read',
    date: '2026-01-10',
    excerpt: 'Strategies for managing payer pre-certification requirements without overloading clinical staff or delaying critical patient procedures.',
    content: [
      'Prior authorizations represent one of the most frustrating administrative burdens in modern healthcare practice. When authorization workflows lag, patient care is delayed, procedure schedules are disrupted, and claims submitted without verified clearance face immediate denial.',
      'Streamlining authorization begins with early identification. By screening upcoming clinical schedules at least 72 hours prior to the encounter, your team can determine payer-specific authorization triggers based on CPT code combinations and diagnostic indications.',
      'Utilizing electronic prior authorization (ePA) portals and maintaining standardized clinical documentation packets for common high-frequency procedures accelerates approval times significantly compared to manual phone calls.',
      'When an authorization is disputed, having a pre-compiled packet of clinical notes, lab results, and relevant guidelines allows the attending physician to conduct peer-to-peer discussions efficiently.',
    ],
    keyTakeaways: [
      'Screen schedules 72 hours in advance to catch authorization triggers early.',
      'Leverage payer electronic portals to track review statuses in real time.',
      'Maintain standardized clinical documentation packets for specialty procedures.',
    ],
  },
  {
    id: 'medical-coding-documentation-integrity',
    slug: 'medical-coding-documentation-integrity',
    title: 'Medical Coding & Documentation Integrity: Balancing Compliance and Reimbursement',
    category: 'Medical Coding',
    readTime: '6 min read',
    date: '2025-12-18',
    excerpt: 'How thorough clinical documentation supports compliant coding, minimizes audit risks, and accurately reflects patient care complexity.',
    content: [
      'Medical coding is not simply about assigning numbers to clinical encounters; it is the accurate translation of physician care into standardized language recognized by healthcare payers and regulatory bodies.',
      'Under-coding—often practiced out of fear of audits—leaves legitimate reimbursement uncollected and misrepresents the true complexity of care your providers deliver. Conversely, over-coding or inappropriate modifier usage creates severe compliance exposure during post-payment audits.',
      'Maintaining documentation integrity requires ongoing dialogue between certified coding professionals and clinical providers. Regular coding reviews focused on Evaluation & Management (E/M) level distribution and medical necessity documentation help clinicians document care accurately without adding burdensome charting time.',
    ],
    keyTakeaways: [
      'Appropriate documentation must clearly substantiate the medical decision-making level.',
      'Avoid both under-coding and over-coding through routine internal chart audits.',
      'Maintain an open, supportive physician query process to resolve chart ambiguities.',
    ],
  },
  {
    id: 'provider-credentialing-timeline-management',
    slug: 'provider-credentialing-timeline-management',
    title: 'The Provider Credentialing Timeline: Avoiding Costly Delays for Growing Practices',
    category: 'Credentialing',
    readTime: '5 min read',
    date: '2025-11-30',
    excerpt: 'Managing CAQH profiles, payer enrollment applications, and revalidation deadlines to ensure uninterrupted in-network billing.',
    content: [
      'Bringing a new physician or advanced practice provider into your practice is an exciting milestone. However, if provider credentialing is not initiated months in advance, that provider may be unable to bill in-network for 90 to 120 days or longer.',
      'A structured credentialing workflow starts with keeping CAQH ProView profiles impeccably up to date, including current malpractice facesheets, state licenses, and DEA certificates. Payer application packages must be tracked actively through enrollment committees rather than submitted and forgotten.',
      'Proactive monitoring of Medicare PECOS revalidations and commercial re-credentialing cycles prevents the disastrous surprise of a provider suddenly falling out of network with a major insurer.',
    ],
    keyTakeaways: [
      'Initiate credentialing at least 90 to 120 days before a new provider’s start date.',
      'Perform quarterly attestations and updates on all active CAQH profiles.',
      'Maintain an expiration calendar for licenses, DEA registrations, and malpractice policies.',
    ],
  },
];

export const MASTER_FAQS = [
  {
    category: 'General RCM',
    question: 'What is Revenue Cycle Management (RCM)?',
    answer: 'Revenue Cycle Management encompasses the entire financial lifecycle of healthcare encounters—from patient appointment scheduling, eligibility verification, and clinical coding, through claim generation, clearinghouse submission, payment posting, denial resolution, and accounts receivable follow-up.',
  },
  {
    category: 'Services',
    question: 'What medical billing services does UR RCM CONSULTANCY LLC provide?',
    answer: 'We provide comprehensive solutions including Medical Billing, Medical Coding, Claims Management, Denial Management, Accounts Receivable (A/R) Follow-Up, Provider Credentialing & Enrollment, Eligibility & Benefits Verification, Prior Authorization Support, and Patient Billing Administration.',
  },
  {
    category: 'Integration',
    question: 'Can you work with our practice’s existing EHR and billing software?',
    answer: 'Yes. We adapt to your existing EHR and Practice Management platforms (such as Athenahealth, eClinicalWorks, AdvancedMD, Kareo/Tebra, Epic, NextGen, and many others) so you do not need to switch software or migrate historical data.',
  },
  {
    category: 'Specialties',
    question: 'Do you work with different healthcare specialties?',
    answer: 'Yes. We support practices across diverse specialties including Primary Care, Internal Medicine, Mental & Behavioral Health, Cardiology, Orthopedics, Dermatology, Pediatrics, Radiology, Physical Therapy, Laboratories, and Surgical Clinics, accommodating specialty-specific coding rules and modifier requirements.',
  },
  {
    category: 'Onboarding',
    question: 'How does the onboarding process work?',
    answer: 'Our 4-step process (Understand, Analyze, Optimize, Support) starts with a discovery consultation to review your software setup, provider roster, and billing history. We establish secure system access, map workflows, configure clearinghouse protocols, and transition claims handling smoothly without disrupting ongoing operations.',
  },
  {
    category: 'Denials',
    question: 'Can you help resolve denied and rejected claims?',
    answer: 'Yes. Our denial management workflow investigates root causes for zero-pay remits, corrects technical defects, compiles clinical appeal packets with policy citations, and tracks statutory response deadlines to recover legitimate reimbursement.',
  },
  {
    category: 'Accounts Receivable',
    question: 'Do you provide follow-up on older, aging accounts receivable?',
    answer: 'Yes. We systematically address aging claims across 30, 60, 90, and 120+ day buckets. We also conduct historical A/R recovery projects to evaluate, prioritize, and pursue collectible legacy balances that accumulated before partnering with us.',
  },
  {
    category: 'Credentialing',
    question: 'Do you support provider credentialing and payer enrollment?',
    answer: 'Yes. We manage CAQH ProView profiles, submit commercial and government (Medicare/Medicaid) enrollment applications, track payer committee reviews, and monitor re-credentialing deadlines to keep your panels active.',
  },
  {
    category: 'Getting Started',
    question: 'How do we get started with UR RCM CONSULTANCY LLC?',
    answer: 'Simply click "Schedule a Consultation" or contact our team via our web form or phone. We will schedule a confidential discovery session to understand your practice needs, review your current billing challenges, and outline a tailored proposal.',
  },
  {
    category: 'Contact & Location',
    question: 'Where is UR RCM CONSULTANCY LLC located and how can we contact you?',
    answer: 'UR RCM CONSULTANCY LLC is headquartered at 5900 BALCONES DRIVE STE 11101, AUSTIN, TX 78731, United States. You can reach our team via phone at (512) 890-3412 or by emailing info@urrcmconsultancy.com.',
  },
];
