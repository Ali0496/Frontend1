document.getElementById('run-code').addEventListener('click', () => {
    // Get the user's code from the textarea
    const code = document.getElementById('code-editor').value;

    // Get the output div to display results
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = ''; // Reset the output area

    try {
        // Execute the user's code
        const result = eval(code);

        // Display the result or message in the output area
        outputDiv.textContent = result !== undefined ? result : 'Code executed successfully!';
        outputDiv.style.color = '#333'; // Reset color for successful execution
    } catch (error) {
        // Catch and display any errors in the output area
        outputDiv.textContent = `Error: ${error.message}`;
        outputDiv.style.color = 'red'; // Show error in red
    }
});
document.getElementById('run-code').addEventListener('click', () => {
    // Get the user's code from the textarea
    const code = document.getElementById('code-editor').value;

    // Get the output textarea to display results
    const outputTextArea = document.getElementById('output');
    outputTextArea.value = ''; // Reset the output area

    try {
        // Execute the user's code
        const result = eval(code);

        // Display the result or message in the output textarea
        outputTextArea.value = result !== undefined ? result : 'Code executed successfully!';
    } catch (error) {
        // Catch and display any errors in the output area
        outputTextArea.value = `Error: ${error.message}`;
    }
});