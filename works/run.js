const company = {
    name: "TechSoft",
    founded: 2010,
    employees: {
      emp1: { name: "Ahmed", role: "Developer" },
      emp2: { name: "Sara", role: "Designer" }
    }
  };
  for (let key in company) {
    
    if (typeof company[key] === "object") {
      for (let innerKey in company[key]) {
        if (typeof company[key][innerKey] === "object") {
          for (let prop in company[key][innerKey]) {
            console.log(`${key}.${innerKey}.${prop}: ${company[key][innerKey][prop]}`);
          }
        } else {
          console.log(`${key}.${innerKey}: ${company[key][innerKey]}`);
        }
      }
    } else {
      console.log(`${key}: ${company[key]}`);
    }
  }




  