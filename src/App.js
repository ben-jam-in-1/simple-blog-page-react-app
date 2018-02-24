import React, { Component } from 'react';
import PostContent from './components/PostContent';
import PostHeader from './components/PostHeader'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  

  render() {
    return (
      <div>
        <PostHeader 
         title="This is a Blog Post"
         author="Ben Meyer"
         backgroundColor="rgba(255, 51, 0, 1)"/>
         <PostContent content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
          aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
          sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat vo
          luptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, n
          isi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate ve
          lit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? 
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
          beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit a
          ut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro qu
          isquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius m
          odi tempora incidunt ut labore et dolore magnam aliquam quaerat vo luptatem. Ut enim ad minima veniam, quis n
          ostrum exercitationem ullam corporis suscipit laboriosam, n isi ut aliquid ex ea commodi consequatur? Quis au
          tem vel eum iure reprehenderit qui in ea voluptate ve lit esse quam nihil molestiae consequatur, vel illum qui 
          lorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
          aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
          sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat vo
          luptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, n
          isi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate ve
          lit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? 
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
          beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit a
          ut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro qu
          isquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius m
          odi tempora incidunt ut labore et dolore magnam aliquam quaerat vo luptatem. Ut enim ad minima veniam, quis n
          ostrum exercitationem ullam corporis suscipit laboriosam, n isi ut aliquid ex ea commodi consequatur? Quis au
          tem vel eum iure reprehenderit qui in ea voluptate ve lit esse quam nihil molestiae consequatur, vel illum qui 
          lorem eum fugiat quo voluptas nulla pariatur?"/>
      </div>
    );
  }
}

export default App;
