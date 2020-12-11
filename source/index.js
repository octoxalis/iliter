const IND_o = new Object( null )


IND_o
  .lang_o =
{
  regex_o:    JS_o.regex_o,
  aside_a:    JS_o.aside_a,
  ante_a:     JS_o.ante_a,
  post_a:     JS_o.post_a,
  callback_f: JS_o.callback_f,
  hiline_a:    //: 1-indexed (line index)
    [
      4, 5,
      12,
      28,
      35, 36, 37, 38, 39, 40, 41, 42
    ],
}


IND_o
  .ilite__v =
(
  code_s
) =>
{
  console.time( 'ilite' )

  code_s =
    code_s
      .trim()
  
  const exit_o =
    I_o
      .aside__s
      (
        code_s,
        {},      //: aside_o
        IND_o.lang_o,
        'Exit',
      )                      //;console.log( exit_o[0] )


  code_s =
    I_o
      .switch__s
      (
        exit_o[0],
        IND_o.lang_o,
        'ante'
      )                      //;console.log( code_s )

  const enter_o =
    I_o
      .aside__s
      (
        code_s,
        exit_o[1],
        IND_o.lang_o,
        'Enter',
      )                      //;console.log( enter_o[0] )


  code_s =
    I_o
      .switch__s
      (
        enter_o[0],
        IND_o.lang_o,
        'post'
      )
  console.timeEnd( 'ilite' )


  document
    .querySelector('#code')
    .innerHTML =
      `${I_o.line__s
        (
          code_s,
          IND_o.lang_o
        )}`                  //;console.log( code_s )
}



void function
()
{
  const file_e =
    document
      .querySelector('#file_select')
  file_e
    .addEventListener
    (
      'change',
      () =>
      {
        const file_a =
          file_e.files
        if ( !file_a.length  )
          {
            return void console.log( 'No file selected' )
          }
          //>
        let file_o =
            file_a[0]
        let reader_o =
          new FileReader()
        reader_o
          .addEventListener
          (
            'load',
            ( event_o ) =>
            {
              IND_o
                .ilite__v
                (
                  event_o
                    .target
                    .result
                )
            }
          )
        reader_o
          .readAsText( file_o )
      }
    )

  const font_e =
    document
      .querySelector('#font_select')
      font_e
    .addEventListener
    (
      'input',
      () =>
      {
        document
          .documentElement
          .style
          .setProperty
          (
            '--size_ratio',
            font_e.value
          )
      }
    )

  const color_e =
    document
      .querySelector('#color_select')
  color_e
    .addEventListener
    (
      'input',
      () =>
      {
        document
          .documentElement
          .style
          .setProperty
          (
            '--c_hue_h',
            color_e.value
          )
      }
    )
}()


