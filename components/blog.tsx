import ProjectCard from "./ui/projectCard";
import img1 from "./images/img_1.webp";
import img2 from "./images/img_2.webp";
import img3 from "./images/1_Zanb6BfnRYpTqjsN90MHMw.png";


const projectData = [
    {
        title: 'Lorem Ipsum doler ibnu anjas badas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ex vitae velit faucibus sagittis.',
        img: img1,
        alt: 'Project Image 1',
        link: '/project-1',
    },
    {
        title: 'Lorem Ipsum doler ibnu anjas badas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ex vitae velit faucibus sagittis.',
        img: img2,
        alt: 'Project Image 1',
        link: '/project-1',
    },
    {
        title: 'Lorem Ipsum doler ibnu anjas badas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ex vitae velit faucibus sagittis.',
        img: img3,
        alt: 'Project Image 1',
        link: '/project-1',
    },
    {
        title: 'Lorem Ipsum doler ibnu anjas badas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ex vitae velit faucibus sagittis.',
        img: img3,
        alt: 'Project Image 1',
        link: '/project-1',
    },
]


const Blog = () => {
  return (
    <section className="bg-white py-20">
        <div className="container max-w-7xl mx-auto">
            <div className="text-white">
                <h2 className="">Blog</h2>
                <h1 className="">Our Latest Post</h1>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectData.map((project, index) => (
                <ProjectCard key={index} title={project.title} description={project.description} imgUrl={project.img} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Blog