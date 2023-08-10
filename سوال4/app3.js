const form = document.querySelector(".form");
const notification = document.querySelector("#notification");
console.log(notification);

form.addEventListener("submit", formList);

function formList(e) {
  e.preventDefault();
  notification.style.display = "block";
  console.log("yesss");
  const formData = Object.fromEntries(new FormData(form).entries());
  console.log(formData);
  const top = formData.topNumber;
  const right = formData.rightNumber;
  const buttom = formData.buttomNumber;
  const left = formData.leftNumber;
  const not = formData.note;
  const classInfo = formData.classInfo;

  console.log(top);
  console.log(right);
  console.log(buttom);
  console.log(left);
  console.log(classInfo);
  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;
  notification.style.bottom = `${buttom}px`;
  notification.style.left = `${left}px`;
  notification.textContent = not;

  notification.classList = `${classInfo}`;
  console.log(top);
}

// element.setAttribute("class", "democlass");
