<?php
/**
 * Created by PhpStorm.
 * User: ognan
 * Date: 6/11/18
 * Time: 5:20 PM
 */

namespace App\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PageController extends AbstractController
{
    /**
     * Home page
     *
     * @Route("/", name="page_homepage")
     */
    public function homepage(){
       return $this->render('page/homepage.html.twig');
    }

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @Route("/contact-us", name="page_contact")
     */
    public function contact(){
        return $this->render('page/contact.html.twig');
    }
}