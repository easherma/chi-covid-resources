# resource-list

This is a project of the Service Design Lab, part of the Office of Design & Delivery at CTM

<we'll flesh this out later once it's more legit>

- We have a list of resources, stored on the city's Socrata data portal. This gets us a nice API to work with, but the interface Socrata provides to view and update data is very data centric and not persona centric.

### Personas

Primary targeted persona at the moment is a caseworker who is relativley new. 

## Intial spike/proof of Concept:

- Data is in Socrta
- Hugo (static site generator) is used to create a simple,low-tech interface to this data as a [data template](https://gohugo.io/templates/data-templates/)

### Three pages/views:

(TODO: flesh these out into Github issues as user stories)

- List
  - As a caseworker, I want to see an up to date list of all available resources so I can find what my client needs and share that information.
  Get the data into the site as a data template 
- Detail
  - As a caseworker, I want to be get details on a specific resources so that I can help them get the specifics of the resource
    Get the data into the site as a data template, provide different info an alternate layout 
- Update
  - As a caseworker, I want to be able to easily update information on a resource or add a new resource so that this information stays up to date for myself and everyone
  Embed socrata form, eventually with validation

