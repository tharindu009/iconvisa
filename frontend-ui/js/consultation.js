document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('consultationForm');
    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            const formData = new FormData(form);
            console.log('Form Data:', formData);

            const response = await fetch('http://localhost:4000/api/consultation', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Submitted!');
                form.reset();
                // Optionally close modal here
            } else {
                alert('Submission failed');
            }
        });
    }
});