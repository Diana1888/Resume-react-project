const Section = ({ title, children }) => {
  return (
    <div className="main-section">
      <div className="section-content">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Section;
