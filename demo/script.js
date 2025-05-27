document.getElementById('symptomForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const symptoms = document.querySelector('textarea[name="symptoms"]').value;
    // Simulate diagnosis based on symptoms
    const diagnosisResult = simulateDiagnosis(symptoms);
    document.getElementById('diagnosisResult').innerText = diagnosisResult;
    navigateTo('diagnosis');
});

function simulateDiagnosis(symptoms) {
    // Simple simulation logic
    if (symptoms.toLowerCase().includes('fever')) {
        return "Possible flu. Consider rest and over-the-counter medication.";
    } else if (symptoms.toLowerCase().includes('severe chest pain')) {
        return "Severe chest pain. Seek emergency care immediately.";
    } else {
        return "No specific diagnosis. Consult a doctor for further evaluation.";
    }
}

function navigateTo(stepId) {
    const currentStep = document.querySelector('.step.active');
    if (currentStep) {
        currentStep.classList.remove('active');
    }
    const nextStep = document.getElementById(stepId);
    nextStep.classList.add('active');
}

// Initial setup
document.getElementById('home').classList.add('active');