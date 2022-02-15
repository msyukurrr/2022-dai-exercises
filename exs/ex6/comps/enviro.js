//MUST HAVE - CREATE A TEMPLATE TAG
var template_enviro = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_comp.innerHTML = `
<style>

.particles {
    background-color:red;
    width: 25px;
    height:25px;
    border-raidus: 50px;
}

</style>

<div class='particles'>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class GameEnviro extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_enviro.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector('.particles').onClick

    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    changeParticle(){
        this.shadowRoot.querySelector('.particles').getElementsByClassName.cssText = `
        background-color: blue;
        `;
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("game-enviro", GameEnviro)