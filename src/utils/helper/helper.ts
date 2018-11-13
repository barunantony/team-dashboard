export const findSlidingComponent = (components: any[], prop: string) => {
    var indxFound = -1;
  
    if (components && components.length === 0) {
      return indxFound;
    }
  
    components.forEach((component, indx) => {
      if (component[prop]) {
        indxFound = indx;
        return;
      }
    });

    return indxFound;
}

export const rotateActiveFlag = (components: any[], prop: string) => {
    let indxFound = findSlidingComponent(components, prop);
    let componentActive, nextComponent;

    nextComponent = components[0];
  
    if (indxFound > -1) {
        componentActive = components[indxFound];
        componentActive[prop] = false;
        if (indxFound === components.length -1) {
            nextComponent = components[0];
        } else {
            nextComponent = components[indxFound + 1];
        }
    }
    nextComponent[prop] = true;
} 
  
export const checkActiveComponentReachedExpiry = (components, count, prop) => {
    let indexFound = findSlidingComponent(components, prop);
  
    if (indexFound === -1) {
      return false;
    }
  
    let component = components[indexFound];

    if(count < component.stay) {
        return false;
    }
  
    return true;
}