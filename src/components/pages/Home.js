
import { useLocation } from "react-router"
export default function Home() {
  const location=useLocation()
  console.log(location)
  return (
    <div className="m-5">
      
       <p>{location.state?location.state.name:''}</p>
       <h1 className="text-center text-primary">Home</h1>
       <p>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, mollitia vitae officia blanditiis itaque totam cumque atque tenetur. Quos eaque dolor incidunt deserunt culpa nemo saepe, alias accusamus laboriosam soluta aperiam? Officiis veritatis consequatur illo? Quaerat nulla minus iste odit, nobis beatae in reprehenderit repudiandae ab. Eveniet, temporibus dolores! In aliquam quas illum optio incidunt vitae, explicabo sit eum consectetur iure, esse, culpa molestiae corrupti quis commodi quam blanditiis maiores eaque! Reiciendis necessitatibus consequuntur nesciunt corporis, eos nam omnis voluptate beatae inventore cum, doloremque veniam laboriosam dolore maiores ipsam culpa ipsum iusto, hic adipisci nobis perspiciatis dolorum vero aliquam! Totam.
       </p>
       <p>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, mollitia vitae officia blanditiis itaque totam cumque atque tenetur. Quos eaque dolor incidunt deserunt culpa nemo saepe, alias accusamus laboriosam soluta aperiam? Officiis veritatis consequatur illo? Quaerat nulla minus iste odit, nobis beatae in reprehenderit repudiandae ab. Eveniet, temporibus dolores! In aliquam quas illum optio incidunt vitae, explicabo sit eum consectetur iure, esse, culpa molestiae corrupti quis commodi quam blanditiis maiores eaque! Reiciendis necessitatibus consequuntur nesciunt corporis, eos nam omnis voluptate beatae inventore cum, doloremque veniam laboriosam dolore maiores ipsam culpa ipsum iusto, hic adipisci nobis perspiciatis dolorum vero aliquam! Totam.
       </p>
       <p>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, mollitia vitae officia blanditiis itaque totam cumque atque tenetur. Quos eaque dolor incidunt deserunt culpa nemo saepe, alias accusamus laboriosam soluta aperiam? Officiis veritatis consequatur illo? Quaerat nulla minus iste odit, nobis beatae in reprehenderit repudiandae ab. Eveniet, temporibus dolores! In aliquam quas illum optio incidunt vitae, explicabo sit eum consectetur iure, esse, culpa molestiae corrupti quis commodi quam blanditiis maiores eaque! Reiciendis necessitatibus consequuntur nesciunt corporis, eos nam omnis voluptate beatae inventore cum, doloremque veniam laboriosam dolore maiores ipsam culpa ipsum iusto, hic adipisci nobis perspiciatis dolorum vero aliquam! Totam.
       </p>

       
     
    </div>
  )
}
