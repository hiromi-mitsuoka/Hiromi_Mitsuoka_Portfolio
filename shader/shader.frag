#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
  vec2 st=gl_FragCoord.xy/u_resolution;
  
  st.x+=cos(st.y*100000.*sin(u_time*.5))*.05;
  
  st.y+=sin(st.x*100000.*cos(u_time*.5))*.05;
  
  float pct=0.;
  
  pct=distance(st,vec2(.5));
  
  pct*=3.;
  
  pct=pow(pct,10.);
  
  vec3 color=vec3(pct);
  
  gl_FragColor=vec4(color,1.);
}