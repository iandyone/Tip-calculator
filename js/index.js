function calculateTip() {
    const billAmount = document.querySelector("#billAmount").value;
    const serviceQuality = document.querySelector("#serviceQuality").value;
    const numOfPeople = document.querySelector("#totalPeople").value || 1;

    if (billAmount && serviceQuality) {
        const totalTips = (billAmount * serviceQuality).toFixed(2);
        const tipByEach = (totalTips / numOfPeople).toFixed(2);

        document.querySelector("#tip-total").innerHTML = `${totalTips} BYN`;
        document.querySelector("#tip-each").innerHTML = `${tipByEach} BYN`;
        document.querySelector("#tips").style.display = "flex";
    } else {
        alert("Пожалуйста, введите  значение суммы счета и оцените качество обслуживания, чтобы я смог Вам помочь");
    }
}