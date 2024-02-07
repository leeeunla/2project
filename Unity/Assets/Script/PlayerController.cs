using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;
using UnityEngine.UI;


public class PlayerController : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void GameOverToReact(string userName, int score);
    [DllImport("__Internal")]
    private static extern void GameStartEventToReact();
    [DllImport("__Internal")]
    private static extern void CoinEventToReact(int coinValue);

    Rigidbody2D rbody;
    float axisH = 0.0f;
    public float speed = 3.0f;

    public float jump = 9.0f;
    public LayerMask groundLayer;
    bool goJump = false;
    bool onGround = false;

    Animator animator; // �ִϸ�����
    public string stopAnime = "PlayerStop";
    public string moveAnime = "PlayerMove";
    public string jumpAnime = "PlayerJump";
    public string goalAnime = "PlayerGoal";
    public string deadAnime = "PlayerOver";
    string nowAnime = "";
    string oldAnime = "";

    public static string gameState = "playing"; // ���� ����

    public int score = 0; // ����

    float jumpInterval = 0.5f;
    float timeSinceLastJump = 0f;

    bool isMoving = false;


    public GameObject userName;


    // Start is called before the first frame update
    void Start()
    {
        rbody = this.GetComponent<Rigidbody2D>();

        animator = GetComponent<Animator>();
        nowAnime = stopAnime;
        oldAnime = stopAnime;

        gameState = "playing"; // ���� ��


#if UNITY_WEBGL == true && UNITY_EDITOR == false
       GameStartEventToReact();
#endif
    }

    // Update is called once per frame
    void Update()
    {
        if (gameState != "playing")
        {
            return;
        }
        if (isMoving == false)
        {
            axisH = Input.GetAxisRaw("Horizontal");
        }
        if (axisH > 0.0f)
        {
            transform.localScale = new Vector3(1, 1, transform.localScale.z);
        }
        else if (axisH < 0.0f)
        {
            transform.localScale = new Vector3(-1, 1, transform.localScale.z);
        }

        timeSinceLastJump = timeSinceLastJump + Time.deltaTime;
        if (Input.GetButtonDown("Jump"))
        {
            if (timeSinceLastJump > jumpInterval)
            {
                Jump();
                timeSinceLastJump = 0;
            }
            else
            {
                goJump = false;
            }
        }
    }

    private void FixedUpdate()
    {
        if (gameState != "playing")
        {
            return;
        }

        onGround = Physics2D.Linecast(transform.position,
                                      transform.position - (transform.up * 0.1f),
                                      groundLayer);
        if (onGround || axisH != 0)
        {
            rbody.velocity = new Vector2(speed * axisH, rbody.velocity.y);
        }
        if (onGround && goJump)
        {
            Vector2 jumpPw = new Vector2(0, jump);
            /*rbody.AddForce(jumpPw, ForceMode2D.Impulse);*/
            rbody.velocity = new Vector2(rbody.velocity.x, jump);
            goJump = false;
        }

        if (onGround)
        {
            // ���� ��
            if (axisH == 0)
            {
                nowAnime = stopAnime;       // ����
            }
            else
            {
                nowAnime = moveAnime;       // �̵�
            }
        }
        else
        {
            // ����
            nowAnime = jumpAnime;
        }

        if (nowAnime != oldAnime)
        {
            oldAnime = nowAnime;
            animator.Play(nowAnime);        // �ִϸ��̼� ���
        }
    }

    public void Jump()
    {
        goJump = true;
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "Goal")
        {
            Goal();
        }
        else if (collision.gameObject.tag == "Dead")
        {
            GameOver();
        }
        else if (collision.gameObject.tag == "ScoreItem")
        {
            // ���� ������
            // ItemData ��������
            ItemData item = collision.gameObject.GetComponent<ItemData>();
            // ���� ���
            score = item.value;
            // ������ ����
            Destroy(collision.gameObject);

#if UNITY_WEBGL == true && UNITY_EDITOR == false
       CoinEventToReact(score);
#endif
        }

    }

    public void Goal()
    {
        animator.Play(goalAnime);
        gameState = "gameclear";
        GameStop(); // ���� ����
    }

    public void GameOver()
    {
        animator.Play(deadAnime);

        gameState = "gameover";
        GameStop(); // ���� ����s
        // =====================
        // ���� ���� ����
        // =====================
        // �÷��̾��� �浹 ���� ��Ȱ��
        GetComponent<CapsuleCollider2D>().enabled = false;
        // �÷��̾ ���� Ƣ�� ������ �ϴ� ����
        rbody.AddForce(new Vector2(0, 5), ForceMode2D.Impulse);

#if UNITY_WEBGL == true && UNITY_EDITOR == false
        GameOverToReact("Player1", 100);
#endif
    }

    void GameStop()
    {
        // Rigidbody2D ��������
        Rigidbody2D rbody = GetComponent<Rigidbody2D>();
        // �ӵ��� 0���� �Ͽ� ���� ����
        rbody.velocity = new Vector2(0, 0);
    }
    public void SetAxis(float h)

    {
        axisH = h;
        if (axisH == 0)
        {
            isMoving = false;
        }
        else
        {
            isMoving = true;
        }
    }
    public void setUserName(string name)
    {
        userName.GetComponent<Text>().text = name;
    }
}
