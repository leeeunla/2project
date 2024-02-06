using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEditor.Experimental.GraphView;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UIElements;

public class UiButton : MonoBehaviour, IPointerDownHandler, IPointerUpHandler
{

    [SerializeField] private bool isRight;
    private PlayerController pCtrl;


    private void OnEnable()
    {
        if (pCtrl == null)
        {
            pCtrl = FindObjectOfType<PlayerController>();
        }
    }

    public void OnPointerDown(PointerEventData eventData)
    {
         
        pCtrl.SetAxis(isRight ? 1 : -1);
    }

    public void OnPointerUp(PointerEventData eventData)
        {
            pCtrl.SetAxis(0);
        }
        }