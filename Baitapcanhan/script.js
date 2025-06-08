const zodiacData = {
  "Bạch Dương": {
    date: "21/3 – 19/4",
    traits: "Nhiệt huyết, thẳng thắn, nhưng dễ nóng nảy và thiếu kiên nhẫn.♈️"
  },
  "Kim Ngưu": {
    date: "20/4 – 20/5",
    traits: "Ổn định, kiên trì, nhưng đôi khi bảo thủ và cố chấp.♉️"
  },
  "Song Tử": {
    date: "21/5 – 20/6",
    traits: "Thông minh, linh hoạt, nhưng dễ thay đổi và thiếu tập trung.♊️"
  },
  "Cự Giải": {
    date: "21/6 – 22/7",
    traits: "Tình cảm, quan tâm, nhưng dễ nhạy cảm và hay lo xa♋️."
  },
  "Sư Tử": {
    date: "23/7 – 22/8",
    traits: "Tự tin, lãnh đạo, nhưng đôi khi kiêu ngạo và cứng đầu.♌️"
  },
  "Xử Nữ": {
    date: "23/8 – 22/9",
    traits: "Tỉ mỉ, thực tế, nhưng hay soi xét và lo lắng.♍️"
  },
  "Thiên Bình": {
    date: "23/9 – 22/10",
    traits: "Công bằng, hòa nhã, nhưng dễ phân vân và ngại quyết định.♎️"
  },
  "Bọ Cạp": {
    date: "23/10 – 21/11",
    traits: "Sâu sắc, bí ẩn, nhưng hay ghen và khó tha thứ.♏️"
  },
  "Nhân Mã": {
    date: "22/11 – 21/12",
    traits: "Lạc quan, thích tự do, nhưng thiếu kiên nhẫn và bốc đồng.♐️"
  },
  "Ma Kết": {
    date: "22/12 – 19/1",
    traits: "Chăm chỉ, có trách nhiệm, nhưng hơi khô khan và cứng nhắc.♑️"
  },
  "Bảo Bình": {
    date: "20/1 – 18/2",
    traits: "Sáng tạo, độc lập, nhưng đôi khi lạnh lùng và khó hiểu.♒️"
  },
  "Song Ngư": {
    date: "19/2 – 20/3",
    traits: "Mơ mộng, giàu cảm xúc, nhưng dễ bị tổn thương và thiếu thực tế.♓️"
  },
};

const listContainer = document.querySelector(".zodiac-list");
const infoBox = document.getElementById("zodiac-info");

// Tạo danh sách cung
for (let sign in zodiacData) {
  const div = document.createElement("div");
  div.textContent = sign;

  const className = sign.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

  div.classList.add(className);
  div.onclick = () => showInfo(sign);
  listContainer.appendChild(div);
}

function typeWriter(el, text, speed = 30, callback) {
  let i = 0;
  el.innerHTML = "";
  el.style.opacity = 1;
  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) callback();
  }
  type();
}

function showInfo(sign) {
  const data = zodiacData[sign];
  infoBox.classList.remove("show");
  void infoBox.offsetWidth;

  infoBox.innerHTML = `
    <h2 id="sign-name"></h2>
    <p id="sign-date"></p>
    <p id="sign-traits"></p>
  `;

  const nameEl = document.getElementById("sign-name");
  const dateEl = document.getElementById("sign-date");
  const traitsEl = document.getElementById("sign-traits");

  typeWriter(nameEl, sign, 50, () => {
    typeWriter(dateEl, `Ngày: ${data.date}`, 25, () => {
      typeWriter(traitsEl, `Tính cách: ${data.traits}`, 20);
    });
  });

  infoBox.classList.add("show");
}