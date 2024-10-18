const text = [
    
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas diam metus, ac lobortis metus aliquet vel. Pellentesque lectus lorem, varius quis interdum sed, pellentesque non orci. Sed et mi et tellus maximus molestie non sed nulla. Sed in condimentum risus, ut accumsan nunc. Sed tempus eros rutrum lectus dignissim fringilla. Sed ut risus eu mauris aliquet lacinia. Quisque nec egestas justo, id mollis arcu. Ut egestas sit amet quam et tempus. Vestibulum porttitor consectetur eros et imperdiet. Quisque lacus leo, efficitur imperdiet consequat ac, pretium et velit. Pellentesque vitae quam id arcu gravida vulputate in nec dolor. Quisque aliquet quis leo eu maximus. Cras et pellentesque lorem.",
        
        "Nullam rutrum convallis sodales. Morbi at ligula vitae metus egestas efficitur. Nullam semper eros non urna interdum, sit amet bibendum quam vulputate. Donec cursus vestibulum dui ac iaculis. Nullam suscipit orci quis orci tincidunt vestibulum. Nunc diam purus, cursus posuere laoreet non, condimentum at odio. Nulla facilisi. Sed vestibulum posuere ex, vel malesuada quam fermentum eu. Pellentesque bibendum vulputate mi nec faucibus. Vivamus luctus interdum nulla vitae viverra. Maecenas lobortis nibh diam, viverra scelerisque tortor imperdiet eu. Curabitur rutrum metus sit amet mi gravida aliquet. Sed sagittis elit nisl, et tristique odio efficitur nec. Praesent libero justo, maximus sed sagittis eu, consequat sed est. Integer vel neque eu magna maximus venenatis.",
        
        "In nec sagittis magna, sit amet egestas tellus. Praesent id enim enim. Aliquam commodo ullamcorper rhoncus. Nulla et mollis mi, ut dictum nisl. Nulla bibendum tortor in dapibus porttitor. Nullam turpis nibh, scelerisque vel volutpat sed, vehicula at odio. Donec ut erat quis orci suscipit sodales quis malesuada tortor. Mauris ultricies velit enim, a tempor libero congue vitae.",
        
        "Fusce non molestie metus. Morbi aliquet semper mi ac feugiat. Pellentesque vel dui ut quam ornare placerat. In scelerisque sodales ex, nec vestibulum lacus tincidunt fermentum. Pellentesque mattis bibendum libero eget condimentum. Morbi sit amet lacus eu augue pretium commodo at et urna. Sed enim nibh, suscipit id dui et, fringilla pellentesque felis. Praesent gravida mauris sodales purus aliquet, quis ullamcorper sapien volutpat. Aliquam ullamcorper eros mollis turpis venenatis, vitae imperdiet risus eleifend. Integer sit amet erat eleifend, vestibulum turpis ut, tempus augue. Ut ut suscipit dui. Morbi nec quam non magna dignissim pharetra. Quisque tempor, nisl ac pulvinar fringilla, quam lectus tincidunt nisi, in aliquet mauris lectus sed quam. Suspendisse condimentum ullamcorper turpis eu mattis. Nullam pulvinar id risus a vulputate. Sed rhoncus luctus elit, at dapibus ipsum efficitur sed.",
        
        "Sed fermentum magna in nulla fermentum, vel vestibulum erat pulvinar. Curabitur quis congue tellus. Phasellus feugiat risus at maximus commodo. Fusce malesuada sem in orci pellentesque consectetur. Donec feugiat ornare ex id tristique. Donec sed velit condimentum, pellentesque nunc in, ultrices enim. Fusce laoreet, arcu in ultricies tincidunt, ante sem interdum magna, ac luctus tellus felis laoreet lectus. Maecenas id tellus at eros tempor porttitor. Morbi sollicitudin felis vel tortor hendrerit egestas. Ut facilisis tortor eget suscipit egestas. In euismod ante in tellus tincidunt, in pulvinar nunc aliquam. Aenean mollis augue augue. Donec erat ligula, ultrices eu dolor ut, pulvinar sodales diam. Pellentesque libero erat, tempor at est id, rutrum mattis augue. Duis id pharetra mauris.",
        
        "Suspendisse nulla purus, pharetra at lacus in, euismod convallis est. Ut in purus luctus, ultricies quam et, suscipit nibh. Morbi et justo a elit volutpat fringilla ac vel mauris. Aliquam eget fringilla nibh. Morbi posuere blandit laoreet. In laoreet sem tortor, at molestie ligula lacinia lacinia. Cras eleifend fringilla augue, sed viverra lectus pharetra vitae.",
        
        "Praesent sit amet ante et ligula congue lacinia eu quis ante. Aenean sit amet lobortis diam. Praesent sodales mi a metus blandit, ac vestibulum ipsum eleifend. Cras congue elit nisl, id finibus lacus varius at. Aenean dignissim lorem lobortis, convallis nulla in, suscipit dui. Pellentesque tincidunt rutrum condimentum. Ut velit lacus, interdum eu pharetra eget, maximus quis tortor.",
        
        "Integer gravida erat ante, ut consectetur risus sodales id. Sed dictum scelerisque leo eget tincidunt. Vestibulum egestas et eros in mattis. Ut nisi lacus, tristique et vulputate eu, fringilla sed nisi. Nulla a tristique lectus, et congue nibh. Proin mollis leo a dolor molestie, eu lacinia sapien condimentum. Maecenas id elementum risus, non mollis augue. Nullam scelerisque, ex id tempor varius, est nisl pellentesque magna, tincidunt pretium risus nibh sit amet quam. Nullam id sollicitudin ante, scelerisque rhoncus est. Integer elementum metus in lacus ultrices, eget convallis urna dapibus. Donec quis auctor erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed aliquet at urna eget fringilla. Morbi nec tortor condimentum, aliquam nunc vitae, ultrices nibh. Sed imperdiet risus a nulla posuere, eu bibendum metus aliquet.",
        
        "Fusce auctor quam non sem porttitor viverra. Donec tristique velit sed porttitor facilisis. Pellentesque viverra semper lacus in bibendum. Pellentesque tincidunt ullamcorper metus vitae porta. Proin vulputate sollicitudin rutrum. Vivamus in mi eget dolor pretium dictum et non mi. Proin consequat mauris nibh, vel lacinia mauris dictum non. Quisque lacinia nunc convallis feugiat vulputate. Nullam quis tortor at justo interdum sagittis. Quisque vel ullamcorper lacus. Suspendisse vitae posuere orci. Fusce ac leo nec tellus vulputate malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum nulla vitae efficitur lacinia. Nam sed consectetur arcu. Morbi sit amet imperdiet metus.",
        
        "Suspendisse potenti. Donec efficitur justo at purus placerat, in fermentum ipsum fringilla. Pellentesque varius venenatis ante ac interdum. Pellentesque at rutrum orci. Morbi laoreet luctus lacus eleifend commodo. Nullam rutrum eget augue sit amet vulputate. Fusce blandit neque non imperdiet gravida. Ut a nibh orci. Donec non lectus diam. Aenean vestibulum pharetra lacinia. Fusce purus lorem, suscipit a purus eget, placerat consequat nisi. Pellentesque eu luctus nisi. Nunc pellentesque erat nunc, sit amet tincidunt velit aliquet sed. In et posuere ex, sed interdum ante. Praesent aliquam, mauris sed tempor euismod, quam ligula dapibus mi, vitae hendrerit tortor leo eu magna.",
        
        "Praesent metus nulla, pretium a lorem ut, interdum accumsan ex. Donec consequat mauris fermentum mollis ullamcorper. Maecenas ut mauris dapibus, dictum metus id, efficitur enim. Duis nisl nunc, volutpat nec lobortis luctus, tincidunt non dolor. Vivamus suscipit tellus urna, id gravida lorem interdum vitae. Mauris iaculis felis ut risus iaculis, non faucibus orci pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean et velit ullamcorper, scelerisque risus ullamcorper, auctor odio. Maecenas mattis, metus non vehicula faucibus, risus libero aliquet urna, at accumsan sem arcu et nibh. Fusce interdum ipsum augue, eget bibendum ipsum viverra non. Nam quis pretium quam, nec posuere augue. Donec pretium nisl eget consequat vehicula. Curabitur lacinia lacus dui, sed maximus dui blandit sit amet. Vestibulum dictum tellus in arcu viverra tincidunt. Pellentesque nisi dui, scelerisque sit amet euismod ut, pellentesque et purus.",
        
        "Duis purus lacus, sollicitudin id neque sed, commodo tempus sapien. Aenean tincidunt in turpis non malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a nisl cursus, imperdiet velit id, vehicula est. Ut sodales sollicitudin neque eget semper. Sed vestibulum mi nulla, a viverra mauris ultrices vitae. Maecenas vulputate in felis id finibus. Vivamus neque justo, dapibus in interdum vitae, posuere vel urna. Sed tempus sit amet tellus ut pellentesque. Sed iaculis ex lectus. In vel enim quis lorem ornare suscipit. Nunc sit amet odio vitae est molestie venenatis.",
        
        "Maecenas placerat pellentesque sapien non interdum. Sed eget augue laoreet, aliquam nunc et, ultrices leo. Mauris dictum, felis ut faucibus"
      
  ];
  
  const form = document.querySelector(".lorem-form");
  const amount = document.getElementById("amount");
  const result = document.querySelector(".lorem-text");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const value = parseInt(amount.value);
    const random = Math.trunc(Math.random() * text.length);
  
    if (isNaN(value) || value < 0 || value > text.length) {
      result.innerHTML = <p class="result">${text[random]}</p>;
    } else {
      let tempText = text.slice(0, value);
      tempText = tempText
        .map(function (item) {
          return <p class='result'>${item}</p>;
        })
        .join("");
      result.innerHTML = tempText;
    }
  });