import React, { Component } from 'react'

export default class ContactUs extends Component {
    render() {
        return (
            <div>
                <h1>Contact Us</h1>
                <p>I never like to think that I design for a 
                    particular person. I design for the woman 
                    I wanted to be, the woman I used to be, 
                    and - to some degree - the woman I'm still a 
                    little piece of. I think the idea of mixing 
                    luxury and mass-market fashion is very modern, 
                    very now - no one wears head-to-toe designer 
                    anymore. That is the key of this collection, 
                    being yourself. Don't be into trends. Don't make 
                    fashion own you, but you decide what you are, 
                    what you want to express by the way you dress and 
                    the way to live. I always say: To be well dressed 
                    you must be well naked. Success isn't about the 
                    end result, it's about what you learn along the 
                    way. Let us know what we can learn!</p>

                    {/* TO DO: WHEN YOU CLICK THE SUBMIT BUTTON, A MESSAGE APPEARS THAT SAYS THANKS FOR REACHING OUT */}
                    <form>
                        <input placeholder="Message" />
                        <input placeholder="Email Address"/>
                        <input placeholder="Full Name" />
                        <input type="submit" value="Send" />
                    </form>
                    <p>123 Totally Real St.</p>
                    <p>Fashion Vera</p>
            </div>
        )
    }
}
