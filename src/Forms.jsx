
function Form(props)
{
    return(
    <>
      <h1>This is form</h1>
      
      <div>
        <form type>
          <label for="fname">First name:</label>               
          <input type="text" id="fname" name="fname" placeholder="Sindhu" size='20'/><br/>
          <br></br>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname" placeholder="haribaskar"/><br/>
          <br></br>
          <input type="submit" value="Submit"/>
        </form>
      </div>
      
      <h2> {props.name}+20= {props.name+20}</h2>
      

      <h1 className="list">List Task</h1>
      <ol type="1">
        <li>Fruits</li>
          <ul>
            <li>Apple</li>
            <li>Orange</li>
            <li>banana</li>
          </ul>
        <li>Vegetables</li>
           <ol type="I">
            <li>Tomato</li>
            <li>Onion</li>
            <li>Carrot</li>
           </ol>
        <li>Birds</li>
           <ul type="square">
            <li>Parrot</li>
            <li>Peacock</li>
            <li>Turkey</li>
            <li>hen</li>

           </ul>

      </ol>

    </>
    
    )
}
export default Form