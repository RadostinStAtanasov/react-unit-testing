import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {  
    test('renders Hello World as a text', () => {
        //Arrange
        render(<Greeting/>);
        
        //Act
        //... nothing
        
        //Assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders Its good to see you! if the button was NOT clicked', () => {
        //Arrange
        render(<Greeting/>)

        //Act
        //... not click button

        //Assert
        const itsGoodToSeeYou = screen.getByText('Its good to see you!', {exact: false});
        expect(itsGoodToSeeYou).toBeInTheDocument();
    });
    
    test('render Changed! if the button WAS clicked', () => {
        //Arrange
        render(<Greeting/>)

        //Act
        const buttondElement = screen.getByRole('button')
        userEvent.click(buttondElement)

        //Assert
        const outputElement = screen.getByText('Changed!')
        expect(outputElement).toBeInTheDocument();
    });

    test('does not renders "Its good to see you" if the button was clicked', () => {
        //Arrange
        render(<Greeting/>);

       //Act
        const buttondElement = screen.getByRole('button')
        userEvent.click(buttondElement)

        //Assert
        const outputElement = screen.queryByText('good to see you', {exact: false})
        expect(outputElement).toBeNull();

    });
})