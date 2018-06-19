## Initial design thoughts:
+ big decision early on - what are the benefits of using different routes vs just one view with dynamic layout
  + for one, how would the latter work on mobile

## Content that needs to be represented:
+ project
  + 
+ task
  + 

## Views / functionality thoughts:
+ **Overview (default - all projects)**
  + Toggle for [ projects / tasks ]
  + List view
    + Item
      + Clicking on an item expands to quick view?
        + Opens an ‘edit’ view?
+ Editor - create/edit a project/task
  + need to represent how much time is left to budget in task
  + if /create, it's blank, if /edit, it's populated by graphcms data
I’ve never used the API to alter a content type itself, but I assume that’s possible? Since a ‘work unit’ (if that’s the same as a task) needs a description but there isn’t an existing property that correlates in the API schema
If I’m misunderstanding the relationship of ‘task’ to ‘work unit’ please help me sort that out
Detail - individual project
When you mention charts, what do you imagine being represented by those? I assume number of work units assigned/completed but does timeline factor in? It’d be great to get some desired parameters to aid in designing efficiently


