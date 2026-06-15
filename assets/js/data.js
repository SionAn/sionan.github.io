// ================================================================
//  data.js — 내용을 수정할 때는 이 파일만 편집하면 됩니다.
// ================================================================

// ----------------------------------------------------------------
//  프로필
// ----------------------------------------------------------------
const PROFILE = {
  name:        'Sion An',
  title:       'Postdoctoral Researcher',
  institution: 'Graduate School of Artificial Intelligence, POSTECH',
  lab:         { name: 'Medical Artificial Intelligence Lab', url: 'https://medicalai.postech.ac.kr' },
  supervisor:  { name: 'Professor Sang Hyun Park', url: 'https://medicalai.postech.ac.kr/members/principal-investigator' },
  department:  'Medical Artificial Intelligence Lab',
  email:       'sionan624@gmail.com',
  photo:       'images/SionAn.png',
  lastUpdated: 'June 15, 2026',

  links: [
    { label: 'GitHub',        icon: 'fab fa-github',        url: 'https://github.com/SionAn' },
    { label: 'Google Scholar',icon: 'fas fa-graduation-cap',url: 'https://scholar.google.com/citations?user=fr1Fb5UAAAAJ&hl=ko' },
    { label: 'ORCID',         icon: 'fab fa-orcid',         url: 'https://orcid.org/0000-0002-3800-7158' },
    { label: 'LinkedIn',      icon: 'fab fa-linkedin',      url: 'https://www.linkedin.com/in/sion-an-99a15527b/' },
  ],

  interests: [
    'Meta-Learning',
    'Transfer Learning',
    'Medical Image and Signal Processing',
    'Brain-Computer Interfaces',
  ],
};

// ----------------------------------------------------------------
//  About (HTML 가능)
// ----------------------------------------------------------------
const ABOUT = `I'm a Postdoctoral Researcher at the
<a href="https://ai.postech.ac.kr/" target="_blank" rel="noopener">Graduate School of Artificial Intelligence</a>,
Pohang University of Science and Technology (POSTECH), affiliated with the
<a href="https://medicalai.postech.ac.kr" target="_blank" rel="noopener">Medical Artificial Intelligence Lab</a>
under the supervision of
<a href="https://medicalai.postech.ac.kr/members/principal-investigator" target="_blank" rel="noopener">Professor Sang Hyun Park</a>.
I received my Ph.D. in Robotics and Mechatronics Engineering from DGIST in February 2026, and my B.S. from DGIST in February 2020.`;

// ----------------------------------------------------------------
//  연구 경력
// ----------------------------------------------------------------
const EXPERIENCE = [
  {
    title:    'Postdoctoral Researcher',
    date:     '2026.03 – Present',
    subtitle: 'Medical Artificial Intelligence Lab, POSTECH\nSupervisor: Prof. Sang Hyun Park',
  },
  {
    title:    'Visiting Student',
    date:     '2024.01 – 2024.12',
    subtitle: 'Shen Lab, University of Pennsylvania\nAdvisor: Prof. Li Shen',
  },
  {
    title:    'Undergraduate Group Research Program',
    date:     '2017.03 – 2017.12',
    subtitle: 'BRAINLab, DGIST\nAdvisor: Prof. Jinung An',
  },
  {
    title:    'Undergraduate Research Assistant',
    date:     '2017.01 – 2018.02',
    subtitle: 'DEMRC, DGIST\nAdvisor: Prof. Hongsoo Choi',
  },
];

// ----------------------------------------------------------------
//  학력
// ----------------------------------------------------------------
const EDUCATION = [
  {
    title:    'Ph.D. in Robotics and Mechatronics Engineering',
    date:     '2020.03 – 2026.02',
    subtitle: 'DGIST, Daegu, South Korea\nSupervisor: Prof. Sang Hyun Park',
  },
  {
    title:    'B.E. in School of Undergraduate Studies',
    date:     '2015.03 – 2020.02',
    subtitle: 'DGIST, Daegu, South Korea',
  },
];

// ----------------------------------------------------------------
//  논문
//  type: 'journal' | 'conference' | 'workshop' | 'domestic'
//  links: { label, icon, url }
//  note: 추가 배지 텍스트 (선택)
// ----------------------------------------------------------------
const PUBLICATIONS = [
  // ── Journal Articles ──────────────────────────────────────────
  {
    id: 'J6', type: 'journal', year: 2025,
    title:   'Subject-Adaptive Meta-Learning for Personalized BCI: A Fusion of Resting-State EEG Signal and Task-Specific Information',
    authors: 'An, S., Kang, M., Kim, S., Chikontwe, P., Shen, L., & Park, S. H.',
    venue:   'Information Fusion',
    abbr:    'INFFUS',
    links:   [],
  },
  {
    id: 'J5', type: 'journal', year: 2024,
    title:   'Few shot Anomaly Detection using Positive Unlabeled Learning with Cycle Consistency and Co-occurrence Features',
    authors: 'An, S., Kim, J., Kim, S., Chikontwe, P., Jung, J., Jeon, H., & Park, S. H.',
    venue:   'Expert Systems with Applications',
    abbr:    'ESWA',
    links:   [{ label: 'DOI', icon: 'fas fa-external-link-alt', url: 'https://doi.org/10.1016/j.eswa.2024.124890' }],
  },
  {
    id: 'J4', type: 'journal', year: 2024,
    title:   'Video Domain Adaptation for Semantic Segmentation using Perceptual Consistency Matching',
    authors: 'Ullah, I., An, S., Chikontwe, P., Kang, M., Choi, J., & Park, S. H.',
    venue:   'Neural Networks',
    abbr:    'NN',
    links:   [{ label: 'DOI', icon: 'fas fa-external-link-alt', url: 'https://doi.org/10.1016/j.neunet.2024.106505' }],
  },
  {
    id: 'J3', type: 'journal', year: 2023,
    title:   'Dual Attention Relation Network with Fine-Tuning for Few Shot EEG Motor Imagery Classification',
    authors: 'An, S., Kim, S., Chikontwe, P., & Park, S. H.',
    venue:   'IEEE Transactions on Neural Networks and Learning Systems',
    abbr:    'TNNLS',
    links:   [
      { label: 'DOI',  icon: 'fas fa-external-link-alt', url: 'https://doi.org/10.1109/TNNLS.2023.3287181' },
      { label: 'Code', icon: 'fab fa-github',             url: 'https://github.com/SionAn/FewShotEEG' },
      { label: 'News', icon: 'fas fa-newspaper',          url: 'https://m.hankookilbo.com/News/Read/A2023082309580001583' },
    ],
  },
  {
    id: 'J2', type: 'journal', year: 2023,
    title:   'Uncertainty-aware semi-supervised few shot segmentation',
    authors: 'Kim, S., Chikontwe, P., An, S., & Park, S. H.',
    venue:   'Pattern Recognition',
    abbr:    'PR',
    links:   [{ label: 'DOI', icon: 'fas fa-external-link-alt', url: 'https://doi.org/10.1016/j.patcog.2022.109292' }],
  },
  {
    id: 'J1', type: 'journal', year: 2022,
    title:   'Study on Intention Recognition and Sensory Feedback Control of Robotic Prosthetic Hand Through EMG Classification and Proprioceptive Feedback Using Rule-based Haptic Device',
    authors: 'Cha, H., An, S., Choi, S., Yang, S., Park, S. H., Park, S.',
    venue:   'IEEE Transactions on Haptics',
    abbr:    'ToH',
    links:   [{ label: 'DOI', icon: 'fas fa-external-link-alt', url: 'https://doi.org/10.1109/TOH.2022.3177714' }],
  },

  // ── International Conferences ─────────────────────────────────
  {
    id: 'C11', type: 'conference', year: 2026,
    title:   'Subject- and Task-Aware EEG Foundation Model',
    authors: 'An, S., Kim, S., & Park, S. H.',
    venue:   'MICCAI',
    abbr:    'MICCAI',
    links:   [],
  },
  {
    id: 'C10', type: 'conference', year: 2026,
    title:   'Retrieval-Guided Federated Semi-Supervised Learning for Medical Image Segmentation',
    authors: 'Par, H., Kim, S., Arsalane, W., An, S., & Park, S. H.',
    venue:   'MICCAI',
    abbr:    'MICCAI',
    links:   [],
  },
  {
    id: 'C9', type: 'conference', year: 2026,
    title:   'Rethinking RAG: Mitigating Text-Driven Hallucinations via Feature-Level Retrieval Integration in Medical LVLMs',
    authors: 'Kim, Y., Kim, S., An, S., & Park, S. H.',
    venue:   'MICCAI',
    abbr:    'MICCAI',
    note:    'Early Accept — Top 9%',
    links:   [],
  },
  {
    id: 'C8', type: 'conference', year: 2025,
    title:   'Few-Shot Logical Anomaly Detection with Text-based Logics via Language-Image Contrastive Training',
    authors: 'Lee, S., Kim, S., An, S., Park, S. H., & Lee, S.',
    venue:   'ACM SIGKDD',
    abbr:    'KDD',
    links:   [],
  },
  {
    id: 'C7', type: 'conference', year: 2024,
    title:   'Subject-Adaptive Transfer Learning Using Resting State EEG Signals for Cross-Subject EEG Motor Imagery Classification',
    authors: 'An, S., Kang, M., Kim, S., Chikontwe, P., Shen, L., & Park, S. H.',
    venue:   'MICCAI',
    abbr:    'MICCAI',
    note:    'Early Accept — Top 11%',
    links:   [
      { label: 'ArXiv', icon: 'fas fa-file-alt', url: 'https://arxiv.org/abs/2405.19346' },
      { label: 'Code',  icon: 'fab fa-github',   url: 'https://github.com/SionAn/MICCAI2024-ResTL' },
    ],
  },
  {
    id: 'C6', type: 'conference', year: 2024,
    title:   'Motor Imagery EEG Signal Generation from Resting-State Signal',
    authors: 'An, S., Shen, L., & Park, S. H.',
    venue:   'IEEE EMBC',
    abbr:    'EMBC',
    note:    'Research Poster',
    links:   [],
  },
  {
    id: 'C5', type: 'conference', year: 2024,
    title:   'Few Shot Part Segmentation Reveals Compositional Logic for Industrial Anomaly Detection',
    authors: 'Kim, S., An, S., Chikontwe, P., Kang, M., Adeli, E., Pohl, K. M., & Park, S. H.',
    venue:   'AAAI',
    abbr:    'AAAI',
    links:   [{ label: 'Paper', icon: 'fas fa-external-link-alt', url: 'https://ojs.aaai.org/index.php/AAAI/article/view/28703' }],
  },
  {
    id: 'C4', type: 'conference', year: 2021,
    title:   'Bidirectional RNN-based few shot learning for 3d medical image segmentation',
    authors: 'Kim, S., An, S., Chikontwe, P., & Park, S. H.',
    venue:   'AAAI',
    abbr:    'AAAI',
    links:   [{ label: 'Paper', icon: 'fas fa-external-link-alt', url: 'https://ojs.aaai.org/index.php/AAAI/article/view/16275' }],
  },
  {
    id: 'C3', type: 'workshop', year: 2021,
    title:   'Low-Dose CT Denoising Using Pseudo-CT Image Pairs',
    authors: 'Won, D., Jung, E., An, S., Chikontwe, P., & Park, S. H.',
    venue:   'MICCAI PRIME Workshop',
    abbr:    'MICCAI PRIME',
    links:   [{ label: 'Paper', icon: 'fas fa-external-link-alt', url: 'https://link.springer.com/chapter/10.1007/978-3-030-87602-9_1' }],
  },
  {
    id: 'C2', type: 'workshop', year: 2020,
    title:   'Low-dose CT denoising using octave convolution with high and low frequency bands',
    authors: 'Won, D., An, S., Park, S. H., & Ye, D. H.',
    venue:   'MICCAI PRIME Workshop',
    abbr:    'MICCAI PRIME',
    links:   [{ label: 'Paper', icon: 'fas fa-external-link-alt', url: 'https://link.springer.com/chapter/10.1007/978-3-030-59354-4_7' }],
  },
  {
    id: 'C1', type: 'conference', year: 2020,
    title:   'Few-Shot Relation Learning with Attention for EEG-based Motor Imagery Classification',
    authors: 'An, S., Kim, S., Chikontwe, P., & Park, S. H.',
    venue:   'IEEE IROS',
    abbr:    'IROS',
    links:   [
      { label: 'Paper', icon: 'fas fa-external-link-alt', url: 'https://ieeexplore.ieee.org/abstract/document/9340933' },
      { label: 'Code',  icon: 'fab fa-github',            url: 'https://github.com/SionAn/FewShotEEG' },
    ],
  },

  // ── Domestic Conferences ──────────────────────────────────────
  {
    id: 'D6', type: 'domestic', year: 2024,
    title:   'Robot gripper integrated thermal sensor based on pyroelectric effect',
    authors: 'Choi, Y., Ryu, C., Kim, H., Park, H., An, S., Park, S. H., & Kim, H.',
    venue:   'Korean Society of Mechanical Engineers Annual Meeting',
    abbr:    'KSME',
    links:   [{ label: 'Link', icon: 'fas fa-external-link-alt', url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11765573' }],
  },
  {
    id: 'D5', type: 'domestic', year: 2023,
    title:   'Anomaly Detection on Abdominal CT and Brain MRI based on Density-Estimation',
    authors: 'Lee, D., An, S., & Park, S. H.',
    venue:   'IPIU',
    abbr:    'IPIU',
    links:   [],
  },
  {
    id: 'D4', type: 'domestic', year: 2022,
    title:   'Dual Attention Relation Network for Few Shot EEG Motor Imagery Classification',
    authors: 'An, S., Kim, S., Chikontwe, P., Park, H., Abdul, T., & Park, S. H.',
    venue:   'Summer Annual Conference of IEIE',
    abbr:    'IEIE',
    links:   [{ label: 'Link', icon: 'fas fa-external-link-alt', url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11132672' }],
  },
  {
    id: 'D3', type: 'domestic', year: 2021,
    title:   'Few Shot Learning based on Bidirectional Recurrent Neural Network for 3D Medical Image Segmentation',
    authors: 'Kim, S., An, S., Chikontwe, P., & Park, S. H.',
    venue:   'IPIU',
    abbr:    'IPIU',
    links:   [],
  },
  {
    id: 'D2', type: 'domestic', year: 2020,
    title:   'Neural Spike Detection using Deep Convolutional Neural Network',
    authors: 'An, S., Kim, S., & Park, S. H.',
    venue:   'IPIU',
    abbr:    'IPIU',
    links:   [],
  },
  {
    id: 'D1', type: 'domestic', year: 2017,
    title:   'Development of Helical Drilling Microrobot Based on Catheter and Guidewire for Chronic Total Occlusion Treatment',
    authors: 'Lee, H., An, S., Jeon, S., Kim, K., Lee, S., Lee, S., Kim, J. Y., & Choi, H.',
    venue:   'Korean Society of Mechanical Engineers Annual Meeting',
    abbr:    'KSME',
    links:   [{ label: 'Link', icon: 'fas fa-external-link-alt', url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE07288378' }],
  },
];

// ----------------------------------------------------------------
//  수상
// ----------------------------------------------------------------
const AWARDS = [
  { year: 2026, desc: 'Hyeseul Best Paper Award' },
  { year: 2023, desc: 'DGIST Outstanding Researcher Award' },
  { year: 2023, desc: 'DGIST Post-Graduate Research Abroad Awards' },
  { year: 2023, desc: 'Industry-Academia Scholarship from the CTO team at LG Electronics' },
  { year: 2021, desc: 'Ranked 3rd in SNUH Sleep AI Challenge' },
];

// ----------------------------------------------------------------
//  발표
// ----------------------------------------------------------------
const PRESENTATIONS = [
  {
    year:  2026,
    title: 'Doctoral Consortium',
    venue: 'Workshop on Image Processing and Image Understanding (IPIU 2026)',
  },
];

// ----------------------------------------------------------------
//  리뷰 서비스
// ----------------------------------------------------------------
const REVIEWS = [
  'Medical Image Analysis',
  'Neural Networks',
  'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)',
  'IEEE Transactions on Industrial Informatics (TII)',
  'IEEE Transactions on Neural Networks and Learning Systems (TNNLS)',
  'IEEE Transactions on Neural Systems and Rehabilitation Engineering (TNSRE)',
  'IEEE Transactions on Knowledge and Data Engineering (TKDE)',
  'Journal of Biomedical and Health Informatics (JBHI)',
  'Cognitive Neurodynamics',
  'International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)',
  'IEEE International Conference on Bioinformatics and Biomedicine (BIBM)',
  'AAAI Conference on Artificial Intelligence',
  'ACM Conference on Bioinformatics, Computational Biology, and Health Informatics (BCB)',
];
