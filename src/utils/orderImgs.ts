const orderImg = (imgs:any) => {
    let fluidImg = {};

    imgs.map(({ childImageSharp: { fluid } }) => {
        console.log(fluid.src.split("/")[4])
        switch(fluid.src.split("/")[4]){
            case "hero-bg-web.png":
                return fluidImg = {
                    ...fluidImg,
                    heroBgWeb:fluid
                }
            case "web-bg.png":
                return fluidImg = {
                    ...fluidImg,
                    bgWeb: fluid
                }    
            case "hero-bg.png":
                return fluidImg = {
                    ...fluidImg,
                    bgMobile: fluid
                }
            case "hero.png":
                return fluidImg = {
                    ...fluidImg,
                    heroMobile: fluid
                }        
            }        

    })

    return fluidImg

}

export default orderImg;