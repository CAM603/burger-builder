# Planning the Burger Builder

This application was created while referencing by Maximilian Schwarzmüller's course on Udemy: React - The Complete Guide https://www.udemy.com/course/react-the-complete-guide-incl-redux/

## Component Tree

-   App
    -   Layout
        -   Toolbar
            -   Drawer Toggle
            -   Logo
            -   Navigation Items
        -   SideDrawer
            -   Logo
            -   Navigation Items
        -   Backdrop
        -   Pages (props.children)
            -   Burger Builder (stateful)
                -   Build Controls
                    -   Build Control1
                    -   Build Control2
                    -   Order Button
                -   Burger
                    -   Ingredient1
                    -   Ingredient2
                -   Modal
                    -   props.children

## State

Ingredients

-   Meat
-   Cheese

Purchased

-   True/False

Total Price

-   Price

## Components

Presentational (Dumb)

## Containers

Stateful
