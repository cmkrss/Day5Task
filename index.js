var resumeJson = {
    "basics": {
      "name": "John Doe",
      "label": "Programmer",
      "email": "cmkrss008@gmail.com",
      "phone": "7708720321",
      "profiles": [{
        "network": "Linkedin",
        "username": "cmkrss008",
        "url": "https://Linkedin.com/cmkrss"
      }]
    },
    
    "education": [{
      "institution": "Anna University",
      "url": "https://CEG.com/",
      "area": "Software Development",
      "studyType": "Master",
      "startDate": "2019-01-01",
      "endDate": "2022-01-01",
      "score": "7.5",
      "courses": [
        "DB1101 - Basic SQL"
      ]
    }],

    "skills": [{
      "name": "Web Development",
      "level": "Master",
      "keywords": [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    }],

    "projects": [{
      "name": "Project",
      "startDate": "2019-01-01",
      "endDate": "2021-01-01",
      "description": "Description...",
      "url": "https://project.com/"
    }]
  }

console.log("This is for In loop");

for(key in resumeJson) {   
    console.log(key);
}






