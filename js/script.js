// ================================
// DESTINATION SELECTION
// ================================

const destinationCards = document.querySelectorAll(".destination-card");
const destinationContinue = document.getElementById("destinationContinue");

destinationCards.forEach(card => {

    card.addEventListener("click", function () {

        // Remove selected from ALL cards
        destinationCards.forEach(item => {
            item.classList.remove("selected");
        });

        // Add selected to the card we clicked
        this.classList.add("selected");

        // Save the selected country
        const country = this.dataset.country;

        localStorage.setItem("ajoDestination", country);

    });

});


// Continue button

if (destinationContinue) {

    destinationContinue.addEventListener("click", function () {

        const selectedCard = document.querySelector(
            ".destination-card.selected"
        );

        if (!selectedCard) {
            alert("Please select a destination.");
            return;
        }

        const country = selectedCard.dataset.country;

        localStorage.setItem("ajoDestination", country);

        window.location.href = "purpose.html";

    });

}

// =========================================
// ÀJÒ — PURPOSE SELECTION
// =========================================

const purposeCards = document.querySelectorAll(".purpose-card");
const purposeContinue = document.getElementById("purposeContinue");

purposeCards.forEach(card => {

    card.addEventListener("click", function () {

        purposeCards.forEach(item => {
            item.classList.remove("selected");
        });

        this.classList.add("selected");

        const purpose = this.dataset.purpose;

        localStorage.setItem(
            "ajoPurpose",
            purpose
        );

    });

});


if (purposeContinue) {

    purposeContinue.addEventListener("click", function () {

        const selectedCard = document.querySelector(
            ".purpose-card.selected"
        );

        if (!selectedCard) {

            alert("Please select your reason for relocating.");

            return;
        }

        const purpose = selectedCard.dataset.purpose;

        localStorage.setItem(
            "ajoPurpose",
            purpose
        );

        window.location.href = "timeline.html";

    });

}

/* =========================================
   ÀJÒ TIMELINE SELECTION
========================================= */

const timelineOptions = document.querySelectorAll(".timeline-option");
const createPlanButton = document.getElementById("createPlanButton");


timelineOptions.forEach(option => {

    option.addEventListener("click", function () {

        // Remove selected state from every option
        timelineOptions.forEach(item => {
            item.classList.remove("selected");

            // Remove checkmark
            const check = item.querySelector(".radio-check");

            if (check) {
                check.remove();
            }
        });


        // Select clicked option
        this.classList.add("selected");


        // Add checkmark
        const radio = this.querySelector(".timeline-radio");

        const check = document.createElement("span");

        check.classList.add("radio-check");

        check.textContent = "✓";

        radio.appendChild(check);


        // Save timeline
        const timeline = this.dataset.timeline;

        localStorage.setItem("ajoTimeline", timeline);

    });

});


/* =========================================
   CREATE JAPA PLAN
========================================= */

if (createPlanButton) {

    createPlanButton.addEventListener("click", function () {

        const selectedOption =
            document.querySelector(".timeline-option.selected");


        if (!selectedOption) {

            alert("Please select your departure timeline.");

            return;
        }


        const timeline =
            selectedOption.dataset.timeline;


        localStorage.setItem(
            "ajoTimeline",
            timeline
        );


        // Go to dashboard
        window.location.href = "dashboard.html";

    });

}
/* =========================================
   ÀJÒ DASHBOARD
========================================= */

const dashboardDestination =
    document.getElementById("dashboardDestination");

const dashboardGoal =
    document.getElementById("dashboardGoal");


/* GET SAVED ONBOARDING INFORMATION */

const savedDestination =
    localStorage.getItem("ajoDestination");

const savedPurpose =
    localStorage.getItem("ajoPurpose");


/* UPDATE DESTINATION */

if (dashboardDestination && savedDestination) {

    dashboardDestination.textContent =
        savedDestination;

}


/* UPDATE GOAL */

if (dashboardGoal && savedPurpose) {

    dashboardGoal.textContent =
        savedPurpose;

}

/* =========================================
   ÀJÒ ROADMAP PAGE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const destination =
        localStorage.getItem("ajoDestination");

    const purpose =
        localStorage.getItem("ajoPurpose");

    const destinationElement =
        document.getElementById("roadmapDestination");

    const destinationTaskText =
        document.getElementById("destinationTaskText");


    /* DESTINATION */

    if (destination && destinationElement) {

        destinationElement.textContent =
            destination;

    }

    if (destination && destinationTaskText) {

        destinationTaskText.textContent =
            `${destination} selected.`;

    }


    /* PURPOSE */

    const destinationPill =
        document.querySelector(".destination-pill");

    if (purpose && destinationPill) {

        const purposeText =
            destinationPill.querySelector("span:last-child");

        if (purposeText) {
            purposeText.textContent =
                `· ${purpose}`;
        }

    }


    /* CONTINUE IELTS */

    const continueIelts =
        document.getElementById("continueIelts");

    if (continueIelts) {

        continueIelts.addEventListener("click", function () {

            window.location.href =
                "ielts.html";

        });

    }


    /* ROADMAP TASK CLICK */

    const roadmapTasks =
        document.querySelectorAll(".roadmap-task");

    roadmapTasks.forEach(function (task) {

        task.addEventListener("click", function () {

            roadmapTasks.forEach(function (item) {
                item.classList.remove("selected-task");
            });

            this.classList.add("selected-task");

        });

    });

});

/* =========================================
   ÀJÒ DOCUMENTS PAGE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const destination =
        localStorage.getItem("ajoDestination");

    const destinationElement =
        document.getElementById("documentsDestination");


    /* ===============================
       DESTINATION
    =============================== */

    if (destination && destinationElement) {

        destinationElement.textContent =
            destination;

    }



    /* ===============================
       DOCUMENT FILTERS
    =============================== */

    const tabs =
        document.querySelectorAll(".document-tab");

    const rows =
        document.querySelectorAll(".document-row");


    tabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            /* Remove active state */

            tabs.forEach(function (item) {
                item.classList.remove("active");
            });


            /* Add active state */

            this.classList.add("active");


            const filter =
                this.dataset.filter;


            /* Show / hide documents */

            rows.forEach(function (row) {

                const status =
                    row.dataset.status;


                if (
                    filter === "all" ||
                    filter === status
                ) {

                    row.style.display = "grid";

                } else {

                    row.style.display = "none";

                }

            });

        });

    });



    /* ===============================
       ADD DOCUMENT
    =============================== */

    const addDocumentBtn =
        document.getElementById("addDocumentBtn");

    const fileInput =
        document.getElementById("documentFileInput");


    if (addDocumentBtn && fileInput) {

        addDocumentBtn.addEventListener(
            "click",
            function () {

                fileInput.click();

            }
        );


        fileInput.addEventListener(
            "change",
            function () {

                if (this.files.length > 0) {

                    const file =
                        this.files[0];

                    alert(
                        `${file.name} selected successfully.`
                    );

                }

            }
        );

    }



    /* ===============================
       UPLOAD NOW BUTTONS
    =============================== */

    const uploadButtons =
        document.querySelectorAll(".upload-action");


    uploadButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                if (fileInput) {
                    fileInput.click();
                }

            }
        );

    });



    /* ===============================
       VIEW BUTTONS
    =============================== */

    const viewButtons =
        document.querySelectorAll(".view-action");


    viewButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const row =
                    this.closest(".document-row");

                const documentName =
                    row.querySelector(
                        ".document-name span"
                    ).textContent;


                alert(
                    `Opening ${documentName}...`
                );

            }
        );

    });

});

/* =========================================
   ÀJÒ BUDGET PLANNER
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       GET SAVED ONBOARDING INFORMATION
    ===================================== */

    const savedDestination =
        localStorage.getItem("ajoDestination");

    const savedPurpose =
        localStorage.getItem("ajoPurpose");


    /* =====================================
       DESTINATION
    ===================================== */

    const budgetDestination =
        document.getElementById("budgetDestination");


    if (budgetDestination && savedDestination) {

        budgetDestination.textContent =
            savedDestination;

    }


    /* =====================================
       PURPOSE
    ===================================== */

    const budgetPurpose =
        document.getElementById("budgetPurpose");


    if (budgetPurpose && savedPurpose) {

        budgetPurpose.textContent =
            savedPurpose;

    }


    /* =====================================
       FIND OUT HOW BUTTON
    ===================================== */

    const fundingHelpButton =
        document.getElementById("fundingHelpButton");


    if (fundingHelpButton) {

        fundingHelpButton.addEventListener(
            "click",
            function () {

                alert(
                    "Funding support information will be available soon."
                );

            }
        );

    }

});

/* =========================================
   ÀJÒ IELTS / TOEFL
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const destination =
        localStorage.getItem("ajoDestination");

    const destinationElement =
        document.getElementById("ieltsDestination");


    if (destination && destinationElement) {

        destinationElement.textContent =
            destination;

    }


    const mockButton =
        document.getElementById("startMockTest");


    if (mockButton) {

        mockButton.addEventListener(
            "click",
            function () {

                alert(
                    "Your live mock test is being prepared."
                );

            }
        );

    }

});
/* =========================================
   ÀJÒ ACCOMMODATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const destination =
        localStorage.getItem("ajoDestination");

    const destinationElement =
        document.getElementById(
            "accommodationDestination"
        );


    /* DESTINATION */

    if (destination && destinationElement) {

        destinationElement.textContent =
            destination;

    }


    /* CITY FILTER */

    const cityTabs =
        document.querySelectorAll(".city-tab");

    const accommodationCards =
        document.querySelectorAll(
            ".accommodation-card"
        );


    cityTabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            cityTabs.forEach(function (item) {

                item.classList.remove("active");

            });


            this.classList.add("active");


            const city =
                this.dataset.city;


            accommodationCards.forEach(
                function (card) {

                    if (
                        card.dataset.city === city
                    ) {

                        card.style.display =
                            "block";

                    } else {

                        card.style.display =
                            "none";

                    }

                }
            );

        });

    });


    /* SEARCH */

    const searchButton =
        document.getElementById(
            "accommodationSearchButton"
        );

    const searchInput =
        document.getElementById(
            "accommodationSearch"
        );


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            function () {

                const search =
                    searchInput.value
                        .trim()
                        .toLowerCase();


                accommodationCards.forEach(
                    function (card) {

                        const city =
                            card.dataset.city
                                .toLowerCase();


                        const title =
                            card.querySelector("h3")
                                .textContent
                                .toLowerCase();


                        if (
                            search === "" ||
                            city.includes(search) ||
                            title.includes(search)
                        ) {

                            card.style.display =
                                "block";

                        } else {

                            card.style.display =
                                "none";

                        }

                    }
                );

            }
        );

    }


    /* INQUIRE BUTTONS */

    const inquireButtons =
        document.querySelectorAll(
            ".inquire-button"
        );


    inquireButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const card =
                    this.closest(
                        ".accommodation-card"
                    );


                const property =
                    card.querySelector("h3")
                        .textContent;


                alert(
                    `Inquiry started for ${property}.`
                );

            }
        );

    });

});

/* =========================================
   ÀJÒ PROFILE & SETTINGS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       PROFILE FORM
    =============================== */

    const profileForm =
        document.getElementById("profileForm");


    if (profileForm) {

        profileForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const fullName =
                document.getElementById("fullName").value;

            const email =
                document.getElementById("email").value;

            const phone =
                document.getElementById("phone").value;

            const destination =
                document.getElementById("profileDestinationInput").value;


            /* SAVE PROFILE INFORMATION */

            localStorage.setItem(
                "ajoProfileName",
                fullName
            );

            localStorage.setItem(
                "ajoProfileEmail",
                email
            );

            localStorage.setItem(
                "ajoProfilePhone",
                phone
            );

            localStorage.setItem(
                "ajoProfileDestination",
                destination
            );


            /* UPDATE PROFILE NAME */

            const profileName =
                document.querySelector(".profile-user-info h2");


            if (profileName) {
                profileName.textContent = fullName;
            }


            /* SHOW SUCCESS */

            alert("Your profile changes have been saved.");

        });

    }



    /* ===============================
       CHANGE PROFILE PHOTO
    =============================== */

    const changePhotoBtn =
        document.getElementById("changePhotoBtn");

    const profilePhotoInput =
        document.getElementById("profilePhotoInput");

    const profileImage =
        document.getElementById("profileImage");


    if (changePhotoBtn && profilePhotoInput) {

        changePhotoBtn.addEventListener("click", function () {

            profilePhotoInput.click();

        });


        profilePhotoInput.addEventListener("change", function () {

            const file = this.files[0];


            if (!file) {
                return;
            }


            const reader =
                new FileReader();


            reader.onload = function (event) {

                if (profileImage) {

                    profileImage.src =
                        event.target.result;

                }

            };


            reader.readAsDataURL(file);

        });

    }



    /* ===============================
       LOAD SAVED PROFILE DATA
    =============================== */

    const savedName =
        localStorage.getItem("ajoProfileName");

    const savedEmail =
        localStorage.getItem("ajoProfileEmail");

    const savedPhone =
        localStorage.getItem("ajoProfilePhone");

    const savedProfileDestination =
        localStorage.getItem("ajoProfileDestination");


    const nameInput =
        document.getElementById("fullName");

    const emailInput =
        document.getElementById("email");

    const phoneInput =
        document.getElementById("phone");

    const destinationInput =
        document.getElementById(
            "profileDestinationInput"
        );


    if (savedName && nameInput) {
        nameInput.value = savedName;
    }


    if (savedEmail && emailInput) {
        emailInput.value = savedEmail;
    }


    if (savedPhone && phoneInput) {
        phoneInput.value = savedPhone;
    }


    if (
        savedProfileDestination &&
        destinationInput
    ) {

        destinationInput.value =
            savedProfileDestination;

    }



    /* ===============================
       LOAD ONBOARDING DESTINATION
    =============================== */

    const savedDestination =
        localStorage.getItem("ajoDestination");


    const profileDestination =
        document.getElementById("profileDestination");


    if (
        savedDestination &&
        profileDestination
    ) {

        profileDestination.textContent =
            savedDestination;

    }



    /* ===============================
       DELETE ACCOUNT
    =============================== */

    const deleteAccountBtn =
        document.getElementById("deleteAccountBtn");


    if (deleteAccountBtn) {

        deleteAccountBtn.addEventListener("click", function () {

            const confirmDelete =
                confirm(
                    "Are you sure you want to permanently delete your Ajo account?"
                );


            if (!confirmDelete) {
                return;
            }


            /* CLEAR AJO DATA */

            localStorage.removeItem("ajoDestination");
            localStorage.removeItem("ajoPurpose");
            localStorage.removeItem("ajoTimeline");

            localStorage.removeItem("ajoProfileName");
            localStorage.removeItem("ajoProfileEmail");
            localStorage.removeItem("ajoProfilePhone");
            localStorage.removeItem("ajoProfileDestination");


            alert("Your Ajo account data has been deleted.");

            window.location.href =
                "../index.html";

        });

    }

});

/* =========================================
   ÀJÒ LOGIN
========================================= */

const loginForm = document.getElementById("loginForm");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");


/* SHOW / HIDE PASSWORD */

if (togglePassword && passwordInput) {

    togglePassword.addEventListener("click", function () {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            this.innerHTML =
                '<i class="fa-regular fa-eye-slash"></i>';

        } else {

            passwordInput.type = "password";

            this.innerHTML =
                '<i class="fa-regular fa-eye"></i>';

        }

    });

}


/* LOGIN */

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value;

        localStorage.setItem(
            "ajoUserEmail",
            email
        );

        /*
            For now, login goes to onboarding.
            Later we'll connect this to a real backend.
        */

        window.location.href =
            "onboarding.html";

    });

}

/* =========================================
   ÀJÒ CREATE ACCOUNT
========================================= */

const signupForm = document.getElementById("signupForm");

const signupPassword =
    document.getElementById("signupPassword");

const confirmPassword =
    document.getElementById("confirmPassword");

const toggleSignupPassword =
    document.getElementById("toggleSignupPassword");

const toggleConfirmPassword =
    document.getElementById("toggleConfirmPassword");


/* SHOW / HIDE PASSWORD */

function togglePasswordVisibility(input, button) {

    if (!input || !button) return;

    if (input.type === "password") {

        input.type = "text";

        button.innerHTML =
            '<i class="fa-regular fa-eye-slash"></i>';

    } else {

        input.type = "password";

        button.innerHTML =
            '<i class="fa-regular fa-eye"></i>';

    }
}


if (toggleSignupPassword) {

    toggleSignupPassword.addEventListener("click", function () {

        togglePasswordVisibility(
            signupPassword,
            toggleSignupPassword
        );

    });

}


if (toggleConfirmPassword) {

    toggleConfirmPassword.addEventListener("click", function () {

        togglePasswordVisibility(
            confirmPassword,
            toggleConfirmPassword
        );

    });

}


/* CREATE ACCOUNT */

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("fullName").value.trim();

        const email =
            document.getElementById("signupEmail").value.trim();


        /* CHECK PASSWORDS */

        if (signupPassword.value !== confirmPassword.value) {

            alert("Passwords do not match.");

            return;

        }


        /* SAVE BASIC USER INFO */

        localStorage.setItem(
            "ajoUserName",
            name
        );

        localStorage.setItem(
            "ajoUserEmail",
            email
        );


        /* GO TO ONBOARDING */

        window.location.href =
            "onboarding.html";

    });

}