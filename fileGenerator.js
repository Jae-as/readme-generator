function fileGenerator(response){
    const content = 
`
    #${response.title}
    
    ## Table of Contents
    * [Description](#Description)
    * [Feature](#Feature)
    * [Mockup](#Mockup)
    * [Installation](#Installation)
    * [Usgae](#Usage)
    * [Test Instructions](#Test-Instructions)
    * [Questions](#Questions)

    # Description
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.description}

    # Feature
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.feature}

    ## User Stories
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.userStory}

    ## Acceptance Criteria
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.acceptanceCriteria}

    # Mockup
    The following images show the web application's appearance and functionality:
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.mockup1}
    ${response.mockup2}
    ${response.mockup3}

    ## Deployed Application
    ${response.deployedLink}

    # Installation
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.installation}

    # Usage
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.usage}

    ## Credits
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.credits}

    ## License
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.license}

    ### Contribution Guidelines
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.contribute}


    # Test Instructions
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.tests}

    # Questions
    ###### [Back to Table of Contents](#Table-of-Contents)
    Review my GitHub Repo: https://github.com/${response.username}
    Email me: ${response.email}
`
    return content;
};

module.exports = fileGenerator;