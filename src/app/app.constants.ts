import { NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";

export class AppConstants{
    public static MODAL_OPTION:NgbModalOptions ={animation:true, centered:true, keyboard:false, size:'lg',backdrop:'static'}; 
    public static MODAL_OPTION_SCROLLABLE:NgbModalOptions ={animation:true, centered:true, keyboard:false, size:'lg',backdrop:'static',scrollable:true}; 
    public static MODAL_OPTION_SM:NgbModalOptions ={animation:true, centered:true, keyboard:false, size:'sm',backdrop:'static'}; 
    public static MODAL_OPTION_XL:NgbModalOptions ={animation:true, centered:true, keyboard:false, size:'xl',backdrop:'static',scrollable:true}; 
    public static BIN_RATE:number= 100;
    public static BIN_RATE_BIG:number= 150;
}