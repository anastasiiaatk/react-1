.filters {
    margin: 0;
    padding: 0;
    list-style: none;
    right: 0;
    left: 0;
  }
  
  .filters li {
    display: inline;
    cursor: default;
  }
  
  .filters li button {
    display: inline-block;
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
  }
  
  .filters li button:not(.selected) {
    cursor: pointer;
  }
  
  .filters li:hover button {
    border-color: rgba(175, 47, 47, 0.1);
  }
  
  .filters li button.selected {
    border-color: rgba(175, 47, 47, 0.2);
  }
  
  @media (max-width: 430px) {
    .filters {
      bottom: 10px;
    }
  }