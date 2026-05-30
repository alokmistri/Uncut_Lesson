const makeQuestions = (rows) =>
  rows.map(([question, answer, option2, option3, option4]) => ({
    question,
    answer,
    options: [answer, option2, option3, option4],
  }));

const quizConfigs = {
  basic: {
    title: "MS-Basic Quiz",
    courseName: "Basic Course",
    backUrl: "course-basic.html",
    description: "Answer 20 MS-Basic, MS-Word, and MS-Paint shortcut questions.",
    questions: makeQuestions([
      ["Which shortcut is used to copy selected text or object?", "Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
      ["Which shortcut is used to paste copied content?", "Ctrl + V", "Ctrl + P", "Ctrl + S", "Ctrl + B"],
      ["Which shortcut is used to cut selected content?", "Ctrl + X", "Ctrl + A", "Ctrl + N", "Ctrl + O"],
      ["Which shortcut is used to undo the last action?", "Ctrl + Z", "Ctrl + Y", "Ctrl + U", "Ctrl + I"],
      ["Which shortcut is used to redo an action?", "Ctrl + Y", "Ctrl + R", "Ctrl + D", "Ctrl + E"],
      ["Which shortcut is used to select all content?", "Ctrl + A", "Ctrl + S", "Ctrl + F", "Ctrl + H"],
      ["Which shortcut is used to save a file?", "Ctrl + S", "Ctrl + P", "Ctrl + W", "Ctrl + K"],
      ["Which shortcut opens the Print window?", "Ctrl + P", "Ctrl + O", "Ctrl + N", "Ctrl + M"],
      ["Which shortcut opens a new document or file?", "Ctrl + N", "Ctrl + T", "Ctrl + L", "Ctrl + Q"],
      ["Which shortcut opens an existing file?", "Ctrl + O", "Ctrl + E", "Ctrl + G", "Ctrl + J"],
      ["Which shortcut makes selected text bold in MS Word?", "Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + D"],
      ["Which shortcut makes selected text italic in MS Word?", "Ctrl + I", "Ctrl + B", "Ctrl + L", "Ctrl + R"],
      ["Which shortcut underlines selected text in MS Word?", "Ctrl + U", "Ctrl + Shift + U", "Ctrl + Alt + U", "Alt + U"],
      ["Which shortcut aligns text to the left in MS Word?", "Ctrl + L", "Ctrl + R", "Ctrl + E", "Ctrl + J"],
      ["Which shortcut centers selected paragraph text?", "Ctrl + E", "Ctrl + C", "Ctrl + M", "Ctrl + T"],
      ["Which shortcut aligns text to the right?", "Ctrl + R", "Ctrl + L", "Ctrl + J", "Ctrl + Shift + R"],
      ["Which shortcut is used to find text in a document?", "Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + D"],
      ["Which shortcut opens the Replace dialog in MS Word?", "Ctrl + H", "Ctrl + R", "Ctrl + Shift + H", "Alt + H"],
      ["Which MS Paint shortcut opens the Resize and Skew window?", "Ctrl + W", "Ctrl + R", "Ctrl + E", "Ctrl + T"],
      ["Which MS Paint shortcut opens Image Properties?", "Ctrl + E", "Ctrl + P", "Ctrl + Shift + E", "Alt + Enter"],
    ]),
  },
  "advanced-excel": {
    title: "Advanced Excel + MS-Access Quiz",
    courseName: "Advanced Excel + MS-Access",
    backUrl: "course-advanced-excel.html",
    description: "Answer 20 Excel, formulas, data tools, and Access related questions.",
    questions: makeQuestions([
      ["Which Excel feature is used to highlight cells based on rules?", "Conditional Formatting", "Flash Fill", "Goal Seek", "Subtotal"],
      ["Which function is commonly used for logical tests?", "IF", "SUM", "LEN", "TODAY"],
      ["Which Excel tool summarizes large data quickly?", "Pivot Table", "Name Box", "Format Painter", "Page Break"],
      ["Which function searches a value vertically in a table?", "VLOOKUP", "PMT", "LEFT", "ROUND"],
      ["Which function returns the current date?", "TODAY", "NOWTEXT", "DATEONLY", "CURRENT"],
      ["Which feature fills patterns automatically?", "Autofill", "Freeze Panes", "Protect Sheet", "Sort"],
      ["Which tool is used to restrict input in cells?", "Data Validation", "Wrap Text", "Merge Cells", "Print Area"],
      ["Which option protects worksheet cells?", "Protect Sheet", "Flash Fill", "Quick Analysis", "Filter"],
      ["Which tool finds an input value to reach a target result?", "Goal Seek", "Power Map", "Subtotal", "Text to Columns"],
      ["Which function calculates EMI/payment amount?", "PMT", "COUNTIF", "INDEX", "RIGHT"],
      ["Which chart is best for showing trends over time?", "Line Chart", "Pie Chart", "Doughnut Chart", "Radar Chart"],
      ["Which feature records repeated Excel actions?", "Macro Recording", "Scenario Manager", "Group", "Freeze Top Row"],
      ["Which function counts cells meeting a condition?", "COUNTIF", "CONCAT", "PROPER", "TRIM"],
      ["Which feature separates text into columns?", "Text to Columns", "Sort", "Filter", "Protect File"],
      ["Which Excel tool creates map-based visualizations?", "Power Map", "Flash Fill", "Solver", "Page Layout"],
      ["Which function combines INDEX with lookup position?", "MATCH", "ROUND", "INT", "LOWER"],
      ["Which option keeps rows visible while scrolling?", "Freeze Panes", "Hide Formulas", "Print Titles", "Workbook Protect"],
      ["Which Access object stores data?", "Table", "Slide", "Chart", "Workbook"],
      ["Which Access object is used to enter data neatly?", "Form", "Macro Sheet", "Pivot Chart", "Cell"],
      ["Which Access object extracts selected records?", "Query", "Theme", "Animation", "Range"],
    ]),
  },
  "tally-prime-gst": {
    title: "Tally Prime + GST Quiz",
    courseName: "Tally Prime + GST",
    backUrl: "course-tally-prime-gst.html",
    description: "Answer 20 Tally Prime, accounting, inventory, and GST questions.",
    questions: makeQuestions([
      ["Which option is used to create a company in Tally Prime?", "Company Creation", "Voucher Entry", "Stock Summary", "Day Book"],
      ["Which voucher records cash or bank receipt?", "Receipt Voucher", "Payment Voucher", "Contra Voucher", "Journal Voucher"],
      ["Which voucher records cash or bank payment?", "Payment Voucher", "Sales Voucher", "Receipt Voucher", "Memo Voucher"],
      ["Which voucher records sales transactions?", "Sales Voucher", "Purchase Voucher", "Contra Voucher", "Reversing Journal"],
      ["Which voucher records purchase transactions?", "Purchase Voucher", "Sales Voucher", "Receipt Voucher", "Physical Stock"],
      ["GST stands for what?", "Goods and Services Tax", "General Sales Total", "Goods Stock Transfer", "Government Service Token"],
      ["Which GST return is commonly related to outward supplies?", "GSTR-1", "GSTR-9C", "ITR-1", "Form 16"],
      ["Which report shows ledger balances?", "Trial Balance", "Stock Item", "Company Info", "Gateway Only"],
      ["Which report shows profit or loss?", "Profit & Loss Account", "Day Book", "Stock Group", "Voucher Type"],
      ["Which feature tracks item quantity?", "Inventory", "Payroll", "Banking", "Security"],
      ["Which master is used for customer or supplier accounts?", "Ledger", "Stock Item", "Unit", "Godown"],
      ["Which master is used for goods/products?", "Stock Item", "Ledger", "Voucher", "Cost Category"],
      ["Which option helps generate transport documents under GST?", "E-way Bill", "Payroll", "Interest", "Cost Centre"],
      ["ITC in GST means what?", "Input Tax Credit", "Internal Tax Code", "Invoice Total Cost", "Item Tax Class"],
      ["Which feature tracks expenses department wise?", "Cost Centre", "Voucher Class", "Godown", "Price List"],
      ["Which process records employee salary?", "Payroll", "Banking", "GST Report", "Inventory"],
      ["TDS stands for what?", "Tax Deducted at Source", "Total Data Sheet", "Tax Debit Summary", "Tally Data Save"],
      ["Which report shows all vouchers day wise?", "Day Book", "Balance Sheet", "Stock Summary", "Group Summary"],
      ["Which report shows assets and liabilities?", "Balance Sheet", "Trial Balance", "Sales Register", "GST Summary"],
      ["Which feature helps track multiple currencies?", "Multi Currency", "Batch Details", "Payroll", "Voucher Numbering"],
    ]),
  },
  "tally-erp": {
    title: "Tally ERP Quiz",
    courseName: "Tally ERP",
    backUrl: "course-tally-erp.html",
    description: "Answer 20 Tally ERP accounting and report questions.",
    questions: makeQuestions([
      ["Which screen is the main entry point in Tally ERP?", "Gateway of Tally", "Control Panel", "Desktop", "Report Builder"],
      ["Which key is commonly used to create a new voucher?", "F7", "F1", "F12", "Esc"],
      ["Which voucher records bank-to-cash transfer?", "Contra Voucher", "Sales Voucher", "Purchase Voucher", "Memo"],
      ["Which voucher records non-cash adjustment entries?", "Journal Voucher", "Receipt Voucher", "Payment Voucher", "Sales Voucher"],
      ["Which master represents an account head?", "Ledger", "Stock Item", "Unit", "Godown"],
      ["Which report shows daily transactions?", "Day Book", "Stock Summary", "Company Alteration", "Security Control"],
      ["Which report shows closing stock value?", "Stock Summary", "Trial Balance", "Day Book", "Voucher Register"],
      ["Which statement shows financial position?", "Balance Sheet", "Sales Register", "Purchase Register", "Ratio Analysis"],
      ["Which statement shows income and expenses?", "Profit & Loss Account", "Stock Group", "Unit Creation", "Voucher Type"],
      ["Which feature is used for inventory items?", "Stock Item", "Ledger", "Budget", "Cost Centre"],
      ["Which voucher records credit sales?", "Sales Voucher", "Payment Voucher", "Receipt Voucher", "Contra Voucher"],
      ["Which voucher records goods purchased?", "Purchase Voucher", "Journal Voucher", "Sales Voucher", "Receipt Voucher"],
      ["Which option changes company details?", "Alter Company", "Split Company", "Select Company", "Shut Company"],
      ["Which shortcut usually accepts a screen in Tally?", "Ctrl + A", "Ctrl + C", "Ctrl + P", "Ctrl + F"],
      ["Which feature records optional transactions?", "Optional Voucher", "Cost Category", "Price Level", "Security"],
      ["Which report checks ledger-wise transactions?", "Ledger Voucher Report", "Stock Item", "Group Creation", "Company Info"],
      ["Which option closes the active company?", "Shut Company", "Create Company", "Backup", "Restore"],
      ["Which feature keeps company data safe?", "Backup", "Delete", "Rewrite", "Export Only"],
      ["Which process brings saved data back?", "Restore", "Split", "Sync", "Import Masters"],
      ["Which report lists all vouchers by type?", "Voucher Register", "Stock Journal", "Unit List", "Godown Summary"],
    ]),
  },
  "power-bi": {
    title: "Power BI Quiz",
    courseName: "Power BI A to Z",
    backUrl: "course-power-bi.html",
    description: "Answer 20 Power BI, Power Query, DAX, and dashboard questions.",
    questions: makeQuestions([
      ["Which Power BI tool is installed on a computer for report building?", "Power BI Desktop", "Power BI Mobile", "PowerPoint", "Excel Viewer"],
      ["Which tool transforms and cleans data in Power BI?", "Power Query", "DAX Studio", "Paint", "Slide Master"],
      ["Which language is used to create measures in Power BI?", "DAX", "HTML", "VBA Only", "CSS"],
      ["Which visual shows a single important number?", "Card", "Map", "Slicer", "Table"],
      ["Which visual filters report data interactively?", "Slicer", "Gauge", "Ribbon", "Shape"],
      ["Which relationship connects tables?", "Table Relationship", "Bookmark", "Theme", "Tooltip"],
      ["Which schema has one fact table and multiple dimensions?", "Star Schema", "Flat Schema", "Circle Schema", "Image Schema"],
      ["Which DAX function totals a column?", "SUM", "LEFT", "TRIM", "LOWER"],
      ["Which DAX function counts rows or values?", "COUNT", "FORMAT", "CONCATENATE", "SEARCH"],
      ["Which feature controls user-level data access?", "Row-Level Security", "Bookmarks", "Themes", "Drill Down"],
      ["Which Power BI feature publishes reports online?", "Power BI Service", "Power Query Editor", "Paint 3D", "SQL Server Only"],
      ["Which option creates navigation experiences?", "Bookmarks", "Data Types", "Relationships", "Merge Queries"],
      ["Which feature combines two queries side by side?", "Merge Queries", "Append Queries", "Sort Ascending", "Data View"],
      ["Which feature stacks similar rows from queries?", "Append Queries", "Merge Queries", "Group By", "Replace Values"],
      ["Which visual is useful for location data?", "Map", "Matrix", "Card", "Button"],
      ["Which view is used to build relationships?", "Model View", "Report View", "Mobile View", "Focus Mode"],
      ["Which object displays rows and columns?", "Table Visual", "Shape", "Button", "Gauge"],
      ["Which feature refreshes data automatically online?", "Scheduled Refresh", "Manual Sort", "Format Painter", "Quick Measure Only"],
      ["Which dashboard project focuses on employees?", "HR Dashboard", "Sales Invoice", "Bank Ledger", "GST Return"],
      ["Which feature improves report experience on phones?", "Mobile View Optimization", "Desktop Wallpaper", "Print Layout", "Slide Size"],
    ]),
  },
  "sap-fico": {
    title: "SAP FICO Quiz",
    courseName: "SAP FICO",
    backUrl: "course-sap-fico.html",
    description: "Answer 20 SAP FICO, FI-GL, AP, AR, and asset accounting questions.",
    questions: makeQuestions([
      ["SAP FICO mainly covers which business area?", "Finance and Controlling", "Graphic Design", "Video Editing", "Typing Only"],
      ["FI in SAP FICO stands for what?", "Financial Accounting", "File Index", "Final Invoice", "Factory Input"],
      ["CO in SAP FICO stands for what?", "Controlling", "Company Only", "Cash Output", "Central Office"],
      ["G/L stands for what?", "General Ledger", "Goods List", "Global Link", "Group Level"],
      ["Which module handles vendor transactions?", "Accounts Payable", "Accounts Receivable", "Asset Master", "Sales Order"],
      ["Which module handles customer transactions?", "Accounts Receivable", "Accounts Payable", "Bank Key", "Cost Element"],
      ["Which SAP area manages fixed assets?", "Asset Accounting", "Payroll", "Inventory Only", "CRM"],
      ["Which structure represents a legal accounting unit?", "Company Code", "Plant", "Storage Location", "Sales Office"],
      ["Which setting controls fiscal periods?", "Fiscal Year Variant", "Sort Key", "Text ID", "Screen Variant"],
      ["Which feature controls document numbering?", "Number Range", "Cost Centre", "Posting Key Only", "Field Status Text"],
      ["Which process records financial transactions?", "Document Posting", "Transport Request", "Report Painter", "Material Staging"],
      ["Which key helps classify line items?", "Posting Key", "Sort Key", "License Key", "Keyboard Key"],
      ["Which setting handles non-local currency postings?", "Foreign Currency Settings", "Printer Settings", "Screen Layout", "Theme"],
      ["Which tool checks rules during entry?", "Validation", "Theme Change", "Upload Logo", "Print Preview"],
      ["Which tool changes values automatically during posting?", "Substitution", "Sort Only", "Layout Save", "Copy Format"],
      ["FSV stands for what?", "Financial Statement Version", "Final Stock Value", "File Save Version", "Fiscal Sheet View"],
      ["Which object tracks departmental cost?", "Cost Center", "Customer Group", "Tax Code Only", "Bank Statement"],
      ["Which master stores vendor details?", "Vendor Master", "Asset Class", "Chart Template", "User Theme"],
      ["Which master stores customer details?", "Customer Master", "G/L Park", "Sort Variant", "Plant Master"],
      ["Which list is useful for trial checking?", "Trial Balance", "Color Palette", "Slide Show", "Stock Transfer"],
    ]),
  },
  "sap-s4-hana": {
    title: "SAP S4 HANA Quiz",
    courseName: "SAP S4 HANA",
    backUrl: "course-sap-s4-hana.html",
    description: "Answer 20 SAP S4 HANA, navigation, enterprise, and analytics questions.",
    questions: makeQuestions([
      ["SAP S/4HANA runs on which database technology?", "SAP HANA", "MS Paint", "Access Only", "Photoshop"],
      ["Which interface improves SAP user experience?", "SAP Fiori", "Notepad", "WordArt", "Paint Brush"],
      ["Which tool is used for SAP GUI navigation?", "SAP GUI", "PowerPoint", "Chrome Theme", "Excel Cell"],
      ["Enterprise Management was previously connected with which area?", "Logistics", "Drawing", "Animation", "Typing"],
      ["Finance was previously known as what in older SAP terms?", "FICO", "HRM Only", "CRM Only", "Paint"],
      ["Human Capital Management relates to which area?", "HR", "Inventory Only", "Banking Only", "Design"],
      ["Embedded Analytics provides what?", "Real-time insights", "Image Cropping", "Font Download", "Video Editing"],
      ["Which system concept controls user permissions?", "Authorization", "Chart Style", "Slide Theme", "Brush Size"],
      ["Which app style is common in S/4HANA?", "Tile-based Fiori apps", "Desktop icons only", "Paint tools", "Email folders"],
      ["Which data type is important for business records?", "Master Data", "Wallpaper", "Font Family", "Audio Track"],
      ["Which process involves setting up SAP for business use?", "Implementation", "Cropping", "Printing Only", "Drawing"],
      ["Which module supports procurement and sales flow?", "Enterprise Management", "Video Editor", "Media Player", "Paint"],
      ["Which technology helps faster reporting?", "In-memory database", "Manual typing", "Clipboard Only", "Printer Driver"],
      ["Which area stores financial postings?", "Finance", "Drawing Canvas", "Slide Sorter", "Image Gallery"],
      ["Which user experience tool uses launchpad?", "Fiori Launchpad", "Task Manager", "File Explorer", "WordPad"],
      ["Which concept applies across the full SAP system?", "Organizational Structure", "Brush Thickness", "Font Color Only", "Page Border"],
      ["Which step usually comes after learning basics?", "Next steps and practice", "Delete system", "Ignore navigation", "Only print"],
      ["Which screen helps users open SAP apps?", "Launchpad", "Recycle Bin", "Paint Area", "Header Footer"],
      ["Which HANA benefit helps analytics?", "Fast data processing", "Slow saving", "Manual refresh only", "Image compression"],
      ["Which learning topic introduces the software?", "Explore SAP S4 HANA", "Excel Chart Only", "Paint Shapes", "PowerPoint Animation"],
    ]),
  },
  peachtree: {
    title: "Microsoft Peachtree Quiz",
    courseName: "Microsoft Peachtree",
    backUrl: "course-microsoft-peachtree.html",
    description: "Answer 20 Peachtree company, accounting, inventory, and reporting questions.",
    questions: makeQuestions([
      ["Which process starts a new business file in Peachtree?", "Creating a New Company", "Deleting Reports", "Changing Theme", "Print Preview"],
      ["Which master organizes account heads?", "Chart of Accounts", "Slide Master", "Cell Range", "Paint Palette"],
      ["Opening balances are entered into which accounting area?", "Chart of Accounts", "Toolbar Only", "Theme Gallery", "Image Size"],
      ["Which report checks debit and credit balances?", "Trial Balance", "Sales Order", "Font Report", "Image Report"],
      ["Which balance is entered for people who buy from business?", "Customer Balances", "Vendor Balances", "Stock Units", "Payroll Codes"],
      ["Which balance is entered for suppliers?", "Vendor Balances", "Customer Balances", "Cash Sales", "Bank Format"],
      ["Inventory items are used for what?", "Stock/products", "Fonts", "Slides", "Shortcuts"],
      ["Which process records daily business transactions?", "Day To Day Entries", "Dashboard Theme", "Window Resize", "Color Fill"],
      ["Prepaid expense is what type of item?", "Expense paid in advance", "Customer payment", "Inventory loss", "Sales return"],
      ["Which transaction records money received from customers?", "Receiving Payment", "Purchase Order", "Credit Limit", "Report Column"],
      ["Which document records planned sales before invoice?", "Sales Order", "Trial Balance", "Vendor List", "Dashboard"],
      ["Which document records planned purchase before invoice?", "Purchase Order", "Customer Receipt", "Cash Sale", "Report Footer"],
      ["Bad debt is linked with which sales type?", "Credit Sales", "Cash Purchase", "Stock Opening", "Dashboard Setup"],
      ["Which process changes sales order into invoice?", "Convert Sales Order to Sales Invoice", "Install Software", "Create Dashboard", "Extract Report"],
      ["Credit limit is adjusted for whom?", "Customer", "Stock Item", "Report Column", "Company Logo"],
      ["Purchase return means what?", "Returning purchased goods", "Selling goods", "Creating company", "Opening software"],
      ["Sales return means what?", "Customer returns sold goods", "Vendor payment", "Trial balance", "Inventory opening only"],
      ["Inventory loss records what?", "Loss in stock", "New company", "Dashboard theme", "Customer advance"],
      ["Which company type uses production process?", "Manufacturing Company", "Only Service Company", "Only Cash Book", "Report Company"],
      ["Which report customization changes visible report fields?", "Customizing Report Columns", "Installing Software", "Creating Vendor", "Entering Password"],
    ]),
  },
};

window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("[data-quiz-form]");
  const questionList = document.querySelector("[data-quiz-questions]");
  const submitButton = document.querySelector("[data-quiz-submit]");
  const resultBox = document.querySelector("[data-quiz-result]");
  const quizIdField = document.querySelector("[data-quiz-id]");
  const topicSelect = document.querySelector("[data-quiz-topic]");
  const titleField = document.querySelector("[data-quiz-title]");
  const descField = document.querySelector("[data-quiz-description]");
  const backLink = document.querySelector("[data-quiz-back]");

  if (!form || !questionList || !submitButton || !resultBox || !quizIdField || !topicSelect) {
    return;
  }

  Object.entries(quizConfigs).forEach(([id, config]) => {
    if (!topicSelect.querySelector(`option[value="${id}"]`)) {
      const option = document.createElement("option");
      option.value = id;
      option.textContent = config.courseName;
      topicSelect.appendChild(option);
    }
  });

  const params = new URLSearchParams(window.location.search);
  const initialCourse = params.get("course") || topicSelect.value || "basic";
  topicSelect.value = quizConfigs[initialCourse] ? initialCourse : "basic";

  const quizId = `QUIZ-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
  quizIdField.textContent = quizId;

  const renderQuiz = () => {
    const config = quizConfigs[topicSelect.value] || quizConfigs.basic;

    if (titleField) titleField.textContent = config.title;
    if (descField) descField.textContent = `${config.description} Score 16 or more to become eligible for 10% discount on ${config.courseName}.`;
    if (backLink) {
      backLink.href = config.backUrl;
      backLink.textContent = `Back To ${config.courseName}`;
    }

    questionList.setAttribute("aria-label", `${config.courseName} quiz questions`);
    questionList.innerHTML = config.questions
      .map((item, index) => {
        const options = item.options
          .map(
            (option) => `
              <label class="quiz-option">
                <input type="radio" name="question-${index}" value="${option}" required>
                <span>${option}</span>
              </label>`
          )
          .join("");

        return `
          <fieldset class="quiz-question">
            <legend>${index + 1}. ${item.question}</legend>
            <div class="quiz-options">${options}</div>
          </fieldset>`;
      })
      .join("");

    resultBox.hidden = true;
    updateSubmitState();
  };

  const isComplete = () => {
    const requiredFields = Array.from(form.querySelectorAll("[required]"));
    return requiredFields.every((field) => {
      if (field.type === "radio") {
        return form.querySelector(`[name="${field.name}"]:checked`);
      }

      return field.value.trim().length > 0;
    });
  };

  function updateSubmitState() {
    submitButton.disabled = !isComplete();
  }

  topicSelect.addEventListener("change", renderQuiz);
  form.addEventListener("input", updateSubmitState);
  form.addEventListener("change", updateSubmitState);
  renderQuiz();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const config = quizConfigs[topicSelect.value] || quizConfigs.basic;
    let score = 0;
    const answers = config.questions.map((item, index) => {
      const selected = form.querySelector(`[name="question-${index}"]:checked`)?.value || "Not answered";
      const correct = selected === item.answer;

      if (correct) score += 1;

      return `${index + 1}. ${item.question}\nSelected: ${selected}\nCorrect Answer: ${item.answer}\nResult: ${correct ? "Correct" : "Wrong"}`;
    });

    const formData = new FormData(form);
    const name = formData.get("student-name").trim();
    const whatsapp = formData.get("student-whatsapp").trim();
    const location = formData.get("student-location").trim();
    const eligible = score >= 16;

    resultBox.hidden = false;
    resultBox.classList.toggle("quiz-result-success", eligible);
    resultBox.classList.toggle("quiz-result-try", !eligible);
    resultBox.innerHTML = eligible
      ? `<h2>Welcome ${name}</h2><p>Your score is <strong>${score}/20</strong>. You can get 10% discount on ${config.courseName} price. Please contact on WhatsApp.</p><a class="whatsapp-details-link" href="https://wa.me/917439034248?text=${encodeURIComponent(`Hello, I scored ${score}/20 in ${config.courseName} quiz. My Quiz ID is ${quizId}. I am eligible for 10% discount.`)}" target="_blank" rel="noopener noreferrer">Contact On WhatsApp</a>`
      : `<h2>Thank You ${name}</h2><p>Your score is <strong>${score}/20</strong>. Please score 16 or more to get the 10% discount on ${config.courseName}.</p>`;

    const emailBody = [
      "Uncut Lesson Quiz Submission",
      "",
      `Quiz ID: ${quizId}`,
      `Quiz Topic: ${config.courseName}`,
      `Student Name: ${name}`,
      `WhatsApp Number: ${whatsapp}`,
      `Location: ${location}`,
      `Score: ${score}/20`,
      `Discount Eligible: ${eligible ? "Yes - 10% discount" : "No"}`,
      "",
      "Answers:",
      answers.join("\n\n"),
    ].join("\n");

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=a.mistri2004@gmail.com&su=${encodeURIComponent(`Quiz Submission - ${config.courseName} - ${name} - ${score}/20`)}&body=${encodeURIComponent(emailBody)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    resultBox.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
