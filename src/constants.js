export const getLenguageImage = (lenguage) => {
  switch (lenguage) {
    case "C":
      return "c.png";
    case "C++":
      return "cpp.png";
    case "C#":
      return "csharp.png";
    case "Java":
      return "java.png";
    case "JavaScript":
      return "javascript.png";
    case "Python":
      return "python.png";
    case "Ruby":
      return "ruby.png";
    case "Swift":
      return "swift.png";
    case "HTML":
      return "html.png";
    case "CSS":
      return "css.png";
    default: {
      return "other.png";
    }
  }
};
