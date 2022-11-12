import { useNavigate } from "react-router";

export default function CardBlog() {
  let dataBlog = [
    {
      id: 1,
      title: "How to solve problem using Design Thinking",
      descTitle:
        "Let's briefly explore each of these phases in relation to a practical design process.",
      desc: "The design thinking process is a problem-solving design methodology that helps you tackle complex problems by framing the issue in a human-centric way. The design thinking process works especially well for problems that are not clearly defined or have a more ambiguous goal. One of the first individuals to write about design thinking was John E. Arnold, a mechanical engineering professor at Stanford. Arnold wrote about four major areas of design thinking in his book, “Creative Engineering” in 1959. His work was later taught at Stanford’s Hasso-Plattner Institute of Design (also known as d.school), a design institute that pioneered the design thinking process. This eventually led Nobel Prize laureate Herbert Simon to outline one of the first iterations of the design thinking process in his 1969 book, “The Sciences of the Artificial.” While there are many different variations of design thinking, “The Sciences of the Artificial” is often credited as the basis. Design thinking is not a linear process. It’s important to understand that each stage of the process can (and should) inform the other steps. For example, when you’re going through user testing, you may learn about a new problem that didn’t come up during any of the previous stages. You may learn more about your target personas during the final testing phase, or discover that your initial problem statement can actually help solve even more problems, so you need to redefine the statement to include those as well. The design thinking process is a never-ending iterative process. Your design team can choose when the user’s needs are met to form a final product, or they can choose to iterate on the design to create alternate variations that solve for different needs.",
      createdAt: "29 Maret 2022",
    },
    {
      id: 2,
      title: "The Best Guide to Know What Is React",
      descTitle:
        "React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.",
      desc: "React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development. React offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI. When compared to other technologies on the market, React is a new technology. Jordan Walke, a software engineer at Facebook, founded the library in 2011, giving it life. The likes of XHP, a straightforward HTML component framework for PHP, have an influence on React. React's newsfeed was its debut application in 2011. Later, Instagram picks it up and incorporates it into their platform.",
      createdAt: "28 Oktober 2022",
    },
  ];

  const navigation = useNavigate()

  const handleId = (id) => {
    navigation(`/blog/${id}`)
  }
  return (
    <>
      <div className="row mb-3 border-bottom">
        <div className="col mb-2">
          <p className="h4 text-primary text-opacity-75">
            <span>
              <i className="fa-regular fa-pen-to-square me-2"></i>
            </span>
            Blog
          </p>
        </div>
      </div>
      <div className="row mb-5">
        {dataBlog.map(({ id, title, descTitle, createdAt }, key) => (
          <div key={key} className="col-12 my-2 pb-2 border-bottom">
            <h4>{title}</h4>
            <div className="d-flex">
              <p className="text-muted">{descTitle}</p>
              <p className="text-muted ms-auto">{createdAt}</p>
            </div>
            <a onClick={()=>handleId(id)} className="btn-link">
              See More.
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
