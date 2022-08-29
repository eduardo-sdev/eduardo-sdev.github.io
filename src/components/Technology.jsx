import{Box}from"./"

const tech = ["HTML, CSS, Javascript", "ReactJs", "Sass"]

export const Technology = () => (
  <div>
    <Box title="Tecnologias">
      <ul className="flex flex-wrap gap-1">
        {tech.map((tec, index) => (
          <li key={index} className="px-1.5 rounded bg-orange-600">
            {tec}
          </li>
        ))}
      </ul>
    </Box>
  </div>
)

