async function fetchImages() {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRExR9CptSxYcesgNeEvbFoCBEWe0u27Hi5sC0lSBaOlQj6jTxlxDcP0H0GqRQv5om1CXCvpOvyMRCU/pubhtml?timestamp=' + new Date().getTime();

    try {
        const response = await fetch(url);
        const text = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const rows = doc.querySelectorAll('table tbody tr');

        const imageContainer = document.getElementById('choice-container');
        const imgLinks = [];
        let completeLink = '';

        // Loop through the rows and extract the links
        rows.forEach((row) => {
            const cell = row.querySelector('td'); // Select the first cell in the row
            if (cell) {
                const link = cell.textContent.trim();
                if (link) {
                    // Check if the link is an image
                    if (/\.(jpg|jpeg|png)$/i.test(link)) {
                        if (imgLinks.length < 4) {
                            // Store the first 4 image links
                            imgLinks.push(link);

                            // Display the image
                            const imgElement = document.createElement('img');
                            imgElement.src = link;
                            imgElement.style.maxWidth = '200px';
                            imgElement.style.height = 'auto';
                            imageContainer.appendChild(imgElement);
                        }
                    } else if (!completeLink) {
                        // Store the first non-image link as completeLink
                        completeLink = link;
                    }
                }
            }
        });
        return { imgLinks, completeLink };

    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

// console.log('im ', completeLink)

fetchImages().then(data => {
    // options values 
    const optionLabels = [2217, 2237, 2257, 2297];
    const options = data?.imgLinks?.map((imgSrc, index) => ({
        id: `option${index + 1}`,
        name: "Question 1", // Never change this
        imgSrc: imgSrc,
        label: `Option ${optionLabels[index]}`
    }));

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle the options
    shuffle(options);

    const choiceContainer = document.getElementById("choice-container");


    // Clear the container
    choiceContainer.innerHTML = "";

    // Append the shuffled options
    options.forEach(option => {
        const radioOptionDiv = document.createElement("div");
        radioOptionDiv.classList.add("radio-option");

        const label = document.createElement("label");

        const img = document.createElement("img");
        img.src = option.imgSrc;
        img.alt = option.label;
        img.style.maxWidth = "300px"; // Ensure images fit their container
        img.style.height = "500px";
        img.style.objectFit = true

        const input = document.createElement("input");
        input.type = "radio";
        input.id = option.id;
        input.name = "Question 1";
        input.value = option.label;

        // Append elements to the label
        label.appendChild(img);
        label.appendChild(document.createElement("br")); // Line break between image and radio button
        label.appendChild(input);
        label.appendChild(document.createTextNode(option.label));

        // Append label to the radio option container
        radioOptionDiv.appendChild(label);
        choiceContainer.appendChild(radioOptionDiv);
    });

    // thank you page 
    const link = data.completeLink; // Assuming data.completeLink contains the link you want to display
    const linkDiv = document.getElementById("completion-link");


});


document.addEventListener("DOMContentLoaded", function () {



    // Function to get URL parameters
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Get the participantId from the URL
    const participantId = getUrlParameter('participantId');

    // If participantId exists, fill the ID number field
    if (participantId) {
        const idNumberInput = document.getElementById('id-number');
        if (idNumberInput) {
            idNumberInput.value = participantId;
        }
    }

    const form = document.forms['survey-form'];
    const errorMessage = document.getElementById('error-message');
    const submitButton = document.getElementById('submit');

    // New validation function for show errors before the submission
    function validateForm() {
        errorMessage.textContent = ''; // Clear previous error message

        // Get form values
        const choice = form['Question 1'].value.trim();
        const why = form['Why?'].value.trim();
        const interest = form['Question 3'].value.trim();
        const buy = form['Question 4'].value.trim();
        const idNumber = form['ParticipantID'].value.trim();

        // Validate each field
        if (!choice) {
            errorMessage.textContent = 'Answer Question 01: book you like best';
            return false;
        } else if (!why) {
            errorMessage.textContent = 'Answer Question 02: why you chose this book.';
            return false;
        } else if (!interest) {
            errorMessage.textContent = 'Answer Question 03: your level of interest.';
            return false;
        } else if (!buy) {
            errorMessage.textContent = 'Answer Question 04: whether you buy books on Amazon.';
            return false;
        } else if (!idNumber) {
            errorMessage.textContent = 'Please enter your CloudResearch ID number.';
            return false;
        }

        return true;
    }

    // Modify the form submit event listener to include validation
    form.addEventListener('submit', e => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Stop submission if validation fails
        }

        // Change button text to 'Submitting...' and disable the button
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;

        fetch('https://script.google.com/macros/s/AKfycbw0geOKpPcjBSQ8TQW_G41EFXlSSfuxKtYgj7y1UAPt/exec', {
            method: 'POST',
            body: new FormData(form)
        })
            .then(() => {
                // Redirect to thank you page after successful submission on the spreadsheet
                window.location.href = "thankyou.html";
            })
            .catch(error => {
                console.error('Error!', error.message);
                // Revert button text and re-enable the button if there's an error
                submitButton.textContent = 'Submit';
                submitButton.disabled = false;
            });
    });
});
