
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Save data to Local Storage
        localStorage.setItem('formData', JSON.stringify(formDataObject));

        // Update the display with the saved data
        updateDisplay(formDataObject);
    }

    function updateDisplay(formDataObject) {
        const displayDataDiv = document.getElementById('displayData');
        const displayContent = `
            <h2>Submitted Data:</h2>
            <pre>${JSON.stringify(formDataObject, null, 2)}</pre>
        `;
        displayDataDiv.innerHTML = displayContent;
    }

    document.addEventListener('DOMContentLoaded', () => {
        const savedFormData = JSON.parse(localStorage.getItem('formData'));
        if (savedFormData) {
            updateDisplay(savedFormData);
        }

        const form = document.querySelector('form');
        form.addEventListener('submit', handleSubmit);
    });

    

    // Function to handle file selection and display the image
    function handleFileSelect(event) {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const displayBox = document.getElementById('displayBox');
                displayBox.style.backgroundImage = `url('${e.target.result}')`;
            };
            reader.readAsDataURL(file); // Read the file and convert it to a Data URL
        }
    }

    // Function to handle the click on displayBox
    function handleDisplayBoxClick() {
        const fileInput = document.getElementById('uploadPic');
        fileInput.click(); // Simulate a click on the file input
    }

    // Add an event listener to handle file selection
    const fileInput = document.getElementById('uploadPic');
    fileInput.addEventListener('change', handleFileSelect);

    // Add an event listener to the displayBox
    const displayBox = document.getElementById('displayBox');
    displayBox.addEventListener('click', handleDisplayBoxClick);






    
    // // Function to handle the "Save Pic" button click
    // function handleSavePic() {
    //     const fileInput = document.getElementById('uploadPic');
    //     const displayBox = document.getElementById('displayBox');

    //     const file = fileInput.files[0]; // Get the selected file
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = function (e) {
    //             displayBox.style.backgroundImage = `url('${e.target.result}')`;
    //         };
    //         reader.readAsDataURL(file); // Read the file and convert it to a Data URL
    //     }
    // }

    // // Add an event listener to the "Save Pic" button
    // const savePicBtn = document.getElementById('savePicBtn');
    // savePicBtn.addEventListener('click', handleSavePic);



