import React, { useState } from 'react';
import {
  FaSearch,
  FaCommentDots,
  FaGlobe,
  FaUser,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';

const IBMNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
    setShowSearch(false);
    setShowMessage(false);
  };

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
    setOpenDropdown(null);
    setShowMessage(false);
  };

  const toggleMessage = () => {
    setShowMessage((prev) => !prev);
    setOpenDropdown(null);
    setShowSearch(false);
  };

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 24px',
      backgroundColor: '#f4f4f4',
      borderBottom: '1px solid #e0e0e0',
      position: 'relative',
    },
    left: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    logo: {
      fontWeight: 'bold',
      fontSize: '20px',
      color: '#0f62fe',
    },
    menu: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
    },
    menuItem: (isActive) => ({
      cursor: 'pointer',
      color: isActive ? '#0f62fe' : '#000',
      fontWeight: isActive ? 'bold' : 'normal',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    }),
    right: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      position: 'relative',
    },
    icon: {
      cursor: 'pointer',
      fontSize: '16px',
      color: '#333',
    },
    dropdown: {
      position: 'absolute',
      top: '60px',
      left: '0',
      right: '0',
      backgroundColor: '#fff',
      padding: '24px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '24px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      zIndex: 10,
    },
    dropdownItem: {
      padding: '8px 12px',
      cursor: 'pointer',
      borderRadius: '4px',
      transition: 'background-color 0.2s ease',
    },
    productTitle: {
      fontWeight: 'bold',
      fontSize: '16px',
      marginBottom: '4px',
      color: '#0f62fe',
    },
    productDescription: {
      fontSize: '14px',
      marginBottom: '8px',
      color: '#555',
    },
    featureList: {
      paddingLeft: '16px',
      fontSize: '13px',
      color: '#444',
    },
    messageBox: {
      position: 'absolute',
      top: '50px',
      right: '20px',
      width: '300px',
      height: '400px',
      backgroundColor: '#fff',
      boxShadow: '0px 4px 16px rgba(0,0,0,0.1)',
      borderRadius: '6px',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    },
    messageHeader: {
      backgroundColor: '#0f62fe',
      color: '#fff',
      padding: '12px',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    messageBody: {
      flex: 1,
      padding: '12px',
      overflowY: 'auto',
      fontSize: '14px',
      color: '#333',
    },
    messageFooter: {
      borderTop: '1px solid #e0e0e0',
      padding: '8px',
      display: 'flex',
    },
    messageInput: {
      flex: 1,
      padding: '8px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginRight: '8px',
    },
    sendButton: {
      backgroundColor: '#0f62fe',
      color: '#fff',
      padding: '8px 12px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    searchBox: {
      position: 'absolute',
      top: '50px',
      right: '20px',
      zIndex: 100,
      backgroundColor: '#fff',
      padding: '12px',
      boxShadow: '0px 4px 16px rgba(0,0,0,0.1)',
      borderRadius: '6px',
      display: 'flex',
      gap: '8px',
    },
    input: {
      padding: '8px',
      width: '220px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    searchButton: {
      backgroundColor: '#0f62fe',
      color: '#fff',
      border: 'none',
      padding: '8px 12px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
    },
  };

  const aiDropdownItems = [
    'Overview',
    'watsonx',
    'Agents',
    'Granite models',
    'Consulting',
    'Research',
    'Ethics and governance',
  ];

  const hybridCloudDropdownItems = [
    'Overview',
    'Consulting',
    'Cloud Platform',
    'IT Infrastructure',
    'Quantum Computing',
    'Research',
  ];

  const supportDropdownItems = [
    'Documentation',
    'Download fixes and drivers',
    'Software licensing',
    'Open a support case',
    'Training and certification',
    'Communities',
    'IBM Developer resources',
    'Product lifecycle',
    'Support plans',
    'Contact IBM',
  ];

  const productItems = [
    {
      title: 'Concert',
      description: 'Software to manage applications, mitigate risks and enhance resilience',
      features: ['Application monitoring', 'Risk detection', 'Incident automation'],
    },
    {
      title: 'Environmental Intelligence',
      description: 'SaaS for predicting and responding to weather and climate events',
      features: ['Climate modeling', 'Real-time alerts', 'Geospatial analytics'],
    },
    {
      title: 'FlashSystem',
      description: 'Primary storage for performance and latency sensitive workloads',
      features: ['Low latency', 'High IOPS', 'Data reduction'],
    },
    {
      title: 'HashiCorp',
      description: 'Manage cloud infrastructure and security',
      features: ['Infrastructure as code', 'Secrets management', 'Network automation'],
    },
    {
      title: 'IBM Cloud',
      description: 'On-demand cloud computing platform and APIs',
      features: ['Kubernetes', 'Serverless', 'AI APIs'],
    },
    {
      title: 'IBM Z',
      description: 'Flagship mainframe with on-chip AI and quantum-safe cryptography',
      features: ['AI on chip', 'Quantum-safe encryption', 'Resilient uptime'],
    },
    {
      title: 'IBM webMethods Hybrid Integration',
      description: 'AI powered automation software to unify integration workflows',
      features: ['API management', 'AI automation', 'Data connectors'],
    },
    {
      title: 'Instana',
      description: 'Software for application performance monitoring and automation',
      features: ['Distributed tracing', 'Root cause analysis', 'Smart alerts'],
    },
    {
      title: 'MaaS360',
      description: 'Unified endpoint management software for many device types',
      features: ['Device enrollment', 'Policy enforcement', 'Threat defense'],
    },
    {
      title: 'Maximo',
      description: 'Software for asset management and related workflows',
      features: ['Predictive maintenance', 'Work order management', 'Mobile access'],
    },
    {
      title: 'Planning Analytics',
      description: 'Software to automate financial and operational planning',
      features: ['Budgeting', 'Forecasting', 'Reporting'],
    },
    {
      title: 'Robotic Process Automation (RPA)',
      description: 'Software to automate workflows and business processes',
      features: ['Workflow automation', 'Bot orchestration', 'Task recording'],
    },
    {
      title: 'Storage Defender',
      description: 'Data resiliency software for threat detection and data recovery',
      features: ['Ransomware detection', 'Immutable backups', 'Threat intelligence'],
    },
    {
      title: 'Turbonomic',
      description: 'Software to manage and optimize IT resource usage',
      features: ['AI optimization', 'Real-time actions', 'Multi-cloud visibility'],
    },
    {
      title: 'Verify',
      description: 'Identity, authentication, and access control software',
      features: ['Multi-factor authentication', 'SSO', 'User provisioning'],
    },
    {
      title: 'watsonx',
      description: 'AI and data platform',
      features: ['Foundation models', 'Data lakehouse', 'AI governance'],
    },
    {
      title: 'watsonx Assistant',
      description: 'Virtual agents customizable to any domain',
      features: ['Chatbot builder', 'Omnichannel support', 'Intent recognition'],
    },
    {
      title: 'watsonx Orchestrate',
      description: 'Personal-assistant software that automates repetitive tasks',
      features: ['Workflow builder', 'HR automation', 'Smart triggers'],
    },
  ];

  return (
    <div>
      <nav style={styles.navbar}>
        <div style={styles.left}>
          <div style={styles.logo}>IBM</div>
          <div style={styles.menu}>
            <div style={styles.menuItem(openDropdown === 'AI')} onClick={() => toggleDropdown('AI')}>
              AI {openDropdown === 'AI' ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
            </div>
            <div style={styles.menuItem(openDropdown === 'Cloud')} onClick={() => toggleDropdown('Cloud')}>
              Hybrid Cloud {openDropdown === 'Cloud' ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
            </div>
            <div style={styles.menuItem(openDropdown === 'Products')} onClick={() => toggleDropdown('Products')}>
              Products {openDropdown === 'Products' ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
            </div>
            <div style={styles.menuItem(false)}>Consulting</div>
            <div style={styles.menuItem(openDropdown === 'Support')} onClick={() => toggleDropdown('Support')}>
              Support {openDropdown === 'Support' ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
            </div>
            <div style={styles.menuItem(false)}>Think</div>
          </div>
        </div>

        <div style={styles.right}>
          <FaSearch style={styles.icon} onClick={toggleSearch} />
          <FaCommentDots style={styles.icon} onClick={toggleMessage} />
          <FaGlobe style={styles.icon} />
          <FaUser style={styles.icon} />

          {showSearch && (
            <div style={styles.searchBox}>
              <input
                type="text"
                placeholder="Search IBM.com"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={styles.input}
              />
              <button style={styles.searchButton}>Search</button>
            </div>
          )}

          {showMessage && (
            <div style={styles.messageBox}>
              <div style={styles.messageHeader}>IBM Virtual Assistant</div>
              <div style={styles.messageBody}>
                <p>Hello! How can we help you today?</p>
                <p>- Product Support</p>
                <p>- Technical Issues</p>
                <p>- Contact Sales</p>
              </div>
              <div style={styles.messageFooter}>
                <input type="text" placeholder="Type a message..." style={styles.messageInput} />
                <button style={styles.sendButton}>Send</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Dropdown Sections */}
      {openDropdown === 'AI' && (
        <div style={styles.dropdown}>
          {aiDropdownItems.map((item, index) => (
            <div key={index} style={styles.dropdownItem}>
              {item} <span style={{ fontSize: '18px' }}>→</span>
            </div>
          ))}
        </div>
      )}

      {openDropdown === 'Cloud' && (
        <div style={styles.dropdown}>
          {hybridCloudDropdownItems.map((item, index) => (
            <div key={index} style={styles.dropdownItem}>
              {item} <span style={{ fontSize: '18px' }}>→</span>
            </div>
          ))}
        </div>
      )}

      {openDropdown === 'Products' && (
        <div style={styles.dropdown}>
          {productItems.map((item, index) => (
            <div key={index}>
              <div style={styles.productTitle}>{item.title}</div>
              <div style={styles.productDescription}>{item.description}</div>
              <ul style={styles.featureList}>
                {item.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {openDropdown === 'Support' && (
        <div style={styles.dropdown}>
          {supportDropdownItems.map((item, index) => (
            <div key={index} style={styles.dropdownItem}>
              {item} <span style={{ fontSize: '18px' }}>→</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IBMNavbar;
