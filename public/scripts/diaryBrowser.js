const diaryCards = {
    "GameDevCS4043": {
        "description": "<h1>GameDevCS4043; First year of college, second semester games modelling project.</h1><h1>An 8 member team, where we use Unity to develop a simple survival game called 'Rob's Servant'.</h1>"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const diaryCard = document.querySelector(".diary-card");
    const diaryCardTitle = diaryCard.querySelector("h1");
    const diaryDescription = document.querySelector(".diary-content .description");
    const diaryLink = document.querySelector(".diary-content .link");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    const diaries = Object.keys(diaryCards);
    let currentDiaryIndex = 0;

    function updateDiary() {
        const currentDiary = diaries[currentDiaryIndex];
        const diaryCardContent = diaryCards[currentDiary];

        diaryCardTitle.textContent = `${currentDiary} diary`;
        diaryDescription.innerHTML = diaryCardContent.description;
        diaryLink.id = `${currentDiary}-diary.html`;
        diaryLink.querySelector("h1").textContent = "view";
        diaryCard.style.backgroundImage = `url('assets/images/${currentDiary}/card.jpg')`;
    }

    leftArrow.addEventListener("click", () => {
        currentDiaryIndex = (currentDiaryIndex - 1 + diaries.length) % diaries.length;
        updateDiary();
    });

    rightArrow.addEventListener("click", () => {
        currentDiaryIndex = (currentDiaryIndex + 1) % diaries.length;
        updateDiary();
    });

    updateDiary();
});