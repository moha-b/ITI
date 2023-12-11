
export const startDrag = function (e) {
    e.dataTransfer.setData("img", e.target.outerHTML);
};

export const endDrag = function (e) {
  e.preventDefault();
  e.target.style.display = "none";
};

export const dropImage = function (e, bottomElement) {
  e.preventDefault();
  bottomElement.innerHTML += e.dataTransfer.getData("img");
};
